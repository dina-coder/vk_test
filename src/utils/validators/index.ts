
export const panValidator = (value: string) => {
    const pan = value.replace(' ', '');
    return pan.length<13 && pan.length>19
};

export const expireValidator = (value: string) => {
    const date = value.split('/');
    return !(+date[0]<=12 && +date[0]>=1 && +date[1]>=21 && +date[1]<=26)
};

export const cvcValidator = (value: string) => value.length!==3;

export const cardholderValidator = (value: string) => {
    if (value.search(/\d/) != -1 ) return true;
    return value.split(' ').length !== 2
};

export const isValid = (obj: any) => !Object.values(obj).some((c) => !!c);
