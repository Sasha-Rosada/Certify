import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GenerateCertificates from "./TemplateGenerator/generator";

import { DiplomasDataRequest, MentorDataRequest, ParticipationDataRequest } from "./slices/certificates"
import InputWrapper from "./Wrappers/InputWrapper";
import Button from "./components/Button";
import TextInput from "./components/Input";
import Select from "./components/Select";
import Spinner from "./components/Spinner";

function App() {

  const [certificateType, setCertificateType] = useState(undefined);

  return (
    <div className="container text-center">
      <h1 className="my-3">Certify</h1>
      {
        certificateType ?
          <CertificateShowcase backButtonHandler={() => setCertificateType(undefined)} type={certificateType} /> :
          <CertificateTypeSelector onTypeSelected={(type) => setCertificateType(type)} />
      }
    </div>
  );
}


function CertificateTypeSelector({ onTypeSelected }) {
  const dispatch = useDispatch();

  const onParticipationButtonClick = () => {
    onTypeSelected?.('Participation')
    dispatch(ParticipationDataRequest());
  }
  const onMentorButtonClick = () => {
    onTypeSelected?.('Mentor')
    dispatch(MentorDataRequest());
  }
  const onDiplomasButtonClick = () => {
    onTypeSelected?.('Diplomma')
    dispatch(DiplomasDataRequest());
  }

  return (
    <div>
      <h2 className="mt-5">Сервіс для видачі cертифікатів</h2>
      <div className="row mt-5 justify-content-center" id="type-select-ui">
        <div className="col-3">
          <Button className={'btn btn-outline-primary'} onClick={onParticipationButtonClick}>Учасникам</Button>
        </div>
        <div className="col-3">
          <Button className={'btn btn-outline-primary'} onClick={onDiplomasButtonClick}>Переможцям</Button>
        </div>
        <div className="col-3">
          <Button className={'btn btn-outline-primary'} onClick={onMentorButtonClick}>Викладачам</Button>
        </div>
      </div>
    </div>
  )
}

function CertificateShowcase({ backButtonHandler, type }) {
  const { data, isFetching } = useSelector(state => state);

  const [suggestionData, setSuggestionData] = useState([]);
  const [userDataToProcces, setUserDataToProcces] = useState(undefined);
  const [userDataIndex, setUserDataIndex] = useState(undefined);
  const [extension, setExtension] = useState();
  const [isGenerateButtonDisabled, setIsGenerateButtonDisabled] = useState(true);

  const onInputHandler = (e) => {

    setSuggestionData([]);

    if (e === '') {
      setIsGenerateButtonDisabled(true);
      return;
    }

    let suggestios = [];

    data.forEach(({ nameUA }, index) => {
      if (nameUA.includes(e)) {
        suggestios.push([nameUA, index]);
      }
    })

    if (suggestios.length === 0) {
      setIsGenerateButtonDisabled(true);
    }

    if (suggestios.length === 1 && suggestios[0][0] === e) {
      SetUserDataIndex(suggestios[0][1]);
      setSuggestionData([])

      return;
    }

    setSuggestionData(suggestios);

  }

  const ResetSuggestionData = () => setSuggestionData([]);
  const UpdateUserData = () => setUserDataToProcces(data[userDataIndex]);
  const SetUserDataIndex = (i) => {
    setUserDataIndex(i);
    setIsGenerateButtonDisabled(false);
  }

  if (isFetching) return <Spinner />

    return (
      <>
        <InputWrapper>
          <Button onClick={backButtonHandler} className="btn btn-outline-primary">&#x2190;</Button>
          <TextInput placeholder={'Enter name'} onInput={onInputHandler} id={'name'} suggestion={suggestionData} onSelect={ResetSuggestionData} setUserDataIndex={SetUserDataIndex} />
          <Select option={ExtensionList} onChange={({ target: { value } }) => setExtension(value)} style={{ 'flexGrow': '.1' }} defaultValue={ExtensionList[0]} />
          <Button disabled={isGenerateButtonDisabled} className="btn btn-outline-primary" onClick={UpdateUserData}>Generate</Button>
        </InputWrapper>
        {
          userDataToProcces ? <Certificates type={type} userdata={userDataToProcces} extension={extension} /> : <></>
        }
      </>
    )
  }

  function Certificates({ userdata, extension, type }) {
    const [ShowLoader, setShowLoader] = useState(true);
    const [Error, setError] = useState(false);

    const [images, setImages] = useState(null);

    useEffect(() => {
      setImages(null);
      setShowLoader(true);

      GenerateCertificates(type, userdata, extension)
        .then((ImageData) => {
          setImages(ImageData);
        })
        .catch((reason) => {
          setError(true);
          setImages(null);
        })
        .finally(() => {
          setShowLoader(false);
        })
    }, [userdata, extension, type])


    return (
      <div className="row justify-content-center" id="cert-holder">
        {
          ShowLoader && <Spinner />
        }
        {
          !ShowLoader && images?.map(([DataURL, lang]) => <CertificateImageHolder DataURL={DataURL} key={lang} filename={`${'cert'}-${lang}`} lang={lang} />)
        }
        {
          Error && <div style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} className="position-absolute">{"Щось пішло не так)"}</div>
        }
      </div>
    )
  }

  function CertificateImageHolder({ DataURL, filename, lang }) {

    const onDowloadClickHandler = () => {
      const link = document.createElement('a');

      link.href = DataURL;
      link.download = filename;

      link.click();
      link.remove();
    }

    return (
      <div className="col-md-5">
        <div className="col-md-12 mt-3">
          <button className="btn btn-outline-primary" onClick={onDowloadClickHandler}>{lang === 'en' ? 'Download' : 'Заватажити'}</button>
        </div>
        <div className="col-md-12 mt-3 p-4">
          <img className="w-100" src={DataURL} alt={''} />
        </div>
      </div>
    );
  }

  const ExtensionList = (() => {
    const res = ['png', 'jpeg'];

    if (navigator.userAgent.match(/chrome|chromium|crios/i)) {
      res.push('webp')
    }

    return res;
  }
  )();

  export default App;
