import { addElementOnHead } from 'Helper/dom';

const MetaInfo = {
    metaInfo() {
        return {
            title: this.titleTag,
            titleTemplate: titleName => titleName ? `${titleName} | chain` : 'chains',
            meta: this.metaData 
        }
    },
    data: () => ({
        titleTag: '',
        metaData: []
    }),
    methods: {
        initMetaInfo(data = null) {
            if(!!data && typeof data === 'object') {
                this.titleTag = data.title
                delete data.title
                let keys = Object.keys(data)

                if(keys.length) {
                    keys.forEach(eachKey => {
                        const objData = {
                            name: eachKey.replace(/^meta/i, '').toLowerCase(),
                            content: data[eachKey]
                        }

                        this.metaData.push(objData)
                    })
                }
            }
        },
        initSetFavicon(imagesURL) {
            addElementOnHead('link', { rel: 'icon', type: 'image/png', sizes: "32x32", href: imagesURL })
        }
    },
}

export default MetaInfo