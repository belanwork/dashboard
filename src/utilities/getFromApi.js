export async function getFromApi(action) {
    const GITHUB = `https://api.github.com`
    const key1 = '6e145467df61491aa0e'
    const key2 = '923c275804ddffd2c5139'
    const headers = {
        "Authorization": `Token ${key1+key2}`
    }
    const prop = {
        method : "GET",
        headers : headers
    }

    switch (action.type) {
        case 'GET_TEN_POPULAR_REPOS': {
            const response = await fetch(`http://belan.ml/`)
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .catch(error => error.json())
            return response
        }
        case 'GET_SEARCH_REPOS': {
            const { value, page } = action
            const response = await fetch(`${GITHUB}/search/repositories?q=${value}&sort=stars&order=desc&page=${page}&per_page=10`,prop)
                .then(res => res.ok ? res.json() : Promise.reject(res))
                .catch(error => console.log(error))
            return response
        }
        case 'GET_REPO': {
            const { author, name } = action
            const headerRes = fetch(`${GITHUB}/repos/${author}/${name}`, prop)
            const languagesRes = fetch(`${GITHUB}/repos/${author}/${name}/languages`, prop)
            const contributorsRes = fetch(`${GITHUB}/repos/${author}/${name}/contributors`, prop)

            const response = Promise.all([headerRes,languagesRes,contributorsRes])
                .then((res,rej) => {
                    return Promise.all(res.map(cell => {
                        return cell.status === 204 ? {} :cell.json()
                    }))
                })
                .catch(error => console.log(error,'ERROR!'))
            return response
        }
        default:
            console.log('Nothing')
    }
} 