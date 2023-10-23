import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface RequestOptions extends AxiosRequestConfig {
  deserialize?: boolean
  fullResponse?: boolean
}

type Handler = (url: string, config?: RequestOptions) => Promise<any>

class Axios {
  private instance

  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
  }

  makeRequest(method: string, url: string, options: RequestOptions = {}) {
    const headers = { ...this.instance.defaults.headers, ...options.headers }

    return this.instance({
      ...options,
      method,
      url,
      headers,
    })
      .then((resp: AxiosResponse) => resp.data)
      .catch(({ response }: AxiosError) => Promise.reject(response))
  }

  get: Handler = (url, config) => this.makeRequest('get', url, config)

  post: Handler = (url, config) => this.makeRequest('post', url, config)

  put: Handler = (url, config) => this.makeRequest('put', url, config)

  patch: Handler = (url, config) => this.makeRequest('patch', url, config)

  del: Handler = (url, config) => this.makeRequest('delete', url, config)
}

export default Axios
