import { http } from './config'

export default {
    getList: () => {
        return http.get()
    }
}