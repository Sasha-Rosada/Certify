import settings from "./settings"

const DEFAULT = {
    DOUBLE_ROW: {
        SPLIT: ' '
    }
}

function chunk(array, chunkSize) {
    const chunks = [];

    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));    
    }

    return chunks;
}


async function generate_certificate(src, settings, alias, userdata, extension) {
    return new Promise((resolve, reject) => {
        const template = new Image();

        template.onload = async ({ path: { 0: img } }) => {
            const { canvas, context } = Canvas(img.naturalWidth, img.naturalHeight, '2d', { alpha: false });

            context.textAlign = 'center';
            context.drawImage(img, 0, 0);

            DrawOnTemplate(context, settings, alias, userdata);

            resolve(canvas.toDataURL(`image/${extension}`, 1));
        }

        template.src = src;
    })
}

/**
 * 
 * @param {CanvasRenderingContext2D} context 
 * @param {*} settings 
 * @param {*} alias 
 * @param {*} userdata 
 */
function DrawOnTemplate(context, settings, alias, userdata) {
    const { dataset } = settings;

    const
        baseX = context.canvas.width / 2,
        baseY = context.canvas.height / 2;

    for (let index = 0; index < dataset.length; index++) {
        const { [dataset[index]]: { [alias]: MappingAlias } } = settings.mapping;
        const { [dataset[index]]: AliasOffset } = settings.offset
        const { [dataset[index]]: Font } = settings.font;
        const { [dataset[index]]: Edit } = settings.edit || {};

        const { [MappingAlias]: AliasContent } = userdata;

        // mb function
        context.font = Array.isArray(Font) ? Font[0] : Font;
        // context.direction = Array.isArray(Font) ? Font[1] : 'ltr';
        context.textAlign = 'center'

        let x, y;

        // * Offset 
        if (Array.isArray(AliasOffset)) {
            x = baseX + AliasOffset[0];
            y = baseY + AliasOffset[1];
        } else {
            x = baseX + AliasOffset[alias][0];
            y = baseY + AliasOffset[alias][1];
        }

        if (Edit?.splitToRows) {
            let splittedContent = AliasContent.split(Edit.splitToRows?.split || DEFAULT.DOUBLE_ROW.SPLIT);

            let toDraw = chunk(splittedContent, 2);

            x += Edit.splitToRows.offset[0] || 0;
            y += Edit.splitToRows.offset[1] || 0;

            toDraw.forEach((v, i) => {
                context.fillText(v.join(' '), x, y + i * Edit.splitToRows.gap)
            })
        } else {
            context.fillText(AliasContent, x, y);
        }

        // // * Double Row Handler
        // if (Edit?.doubleRow) {
        //     let splittedContent = AliasContent.split(Edit.doubleRow.split);

        //     let
        //         fLine = splittedContent[Edit.doubleRow.part],
        //         sLine = splittedContent.splice(Edit.doubleRow.part).join(Edit.doubleRow.split);

        //     context.fillText(fLine, x, y);
        //     context.fillText(sLine, x, y + Edit.doubleRow.gap);
        // } else {
        //     context.fillText(AliasContent, x, y);
        // }

    }
}

async function generate(type, userdata, extension) {
    const { key, templates: { alias, mapping } } = settings[type];
    const ImagesData = [];


    for (let i = 0; i < alias.length; i++) {
        const src = `image/${key}/${mapping[alias[i]]}`;

        const ImageData = await generate_certificate(src, settings[type], alias[i], userdata, extension);

        ImagesData.push([ImageData, alias[i]]);
    }

    return ImagesData;
}

function Canvas(w, h, contextType, contextAtributes) {
    const canvas = document.createElement('canvas');

    canvas.width = w;
    canvas.height = h;

    const context = canvas.getContext(contextType, contextAtributes);

    return { canvas, context };
}

export default generate;