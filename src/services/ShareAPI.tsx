import axios from "axios";

 const baseURL='https://rvh98qbf-44321.brs.devtunnels.ms'

const apiClient = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }

})

export const consultaAcaoPorCodigo = (codigoAcao: string)  => {
    return apiClient.get<any>(`${baseURL}/Share/${codigoAcao}`);
 }
