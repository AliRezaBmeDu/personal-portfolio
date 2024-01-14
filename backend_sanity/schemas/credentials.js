export default {
    name: 'credentials',
    title: 'Credentials',
    type: 'document',
    fields: [ {
            name: 'name',
            title: 'Name',
            type: 'string'
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgURL',
            type: 'image',
            options: {
                hotspot: 'true',
            },
        },
        {
            name: 'feedback',
            title: 'Feedback',
            type: 'string'
        },
        {
            name: 'credentialurl',
            title: 'CredentialURL',
            type: 'string'
        },
    ]
}