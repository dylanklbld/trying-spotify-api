import axiosInstance from "../getAxiosInstance"
import storage from '../../utils/localStorage'

describe("request interceptor", () => {
  it("should have authorization token in header", () => {
    storage.setItem('parameters', `{"access_token":"my_token_123"}`)
    
    const result = axiosInstance.interceptors.request.handlers[0].fulfilled({ headers: {} });
    
    expect(result.headers).toHaveProperty("Authorization")
    expect(result.headers).toEqual({"Authorization": "Bearer my_token_123"})
  });
});

