import { defineStore } from 'pinia'
import axios from 'axios'
import swal from 'sweetalert2'
import Swal from 'sweetalert2'

export const useCustomStore = defineStore({
    id: 'custom',
    state: () => ({
    baseURL: "http://localhost:3000"




    }),
    actions: {
        async loginHandler(value) {
            try {
                const {data} = await axios({
                    method: "POST",
                    url: `${this.baseURL}/users/login`,
                    data: {
                        email: value.email,
                        password: value.password
                    }
                })
                console.log(data)
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', data.userName)
                localStorage.setItem('role', data.role)
                this.router.push('/')
            } catch (error) {
                console.log(error)
            }
        }
    }
  })
  