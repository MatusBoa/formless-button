export default class MethodConvertor
{
    /**
     * @param {String} method
     */
    static convert(method) {
        method = method.toUpperCase();

        if (["PUT", "DELETE", "POST"].includes(method)) {
            return "POST";
        }

        return "GET";
    }
}