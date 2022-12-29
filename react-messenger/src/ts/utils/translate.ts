const token = 'y0_AgAAAAAU5DGuAATuwQAAAADYGXy64buZpEbbTDCrmmTRdEZ4dNDj7Ew'

const folder = 'b1gpa4t2lt6kg5tua4a4'

const body = {
    yandexPassportOauthToken: token,
    folderId: folder,
    texts: ['Hello', 'World'],
    'targetLanguageCode': 'ru'
}

export function translate(text: string) {
    return fetch('https://translate.api.cloud.yandex.net/translate/v2/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(body)
    }).then(resp => console.log(resp))
}