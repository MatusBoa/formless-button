import RequestMethods from "./RequestMethods"

export default class MethodConvertor
{
    public static convert(method: string): string
    {
        return RequestMethods[method]
    }
}