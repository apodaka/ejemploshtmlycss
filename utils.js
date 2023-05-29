const utils = {
    /**
     * @author Erubiel Apodaca <japodaca@coppel.com>
     * Valida si un valor es indefinido. 
     * @return Boolean 
     * */
    isUndefined: (val) => typeof val === 'undefined', 
    /**
     * @author Erubiel Apodaca <japodaca@coppel.com>
     * Transforma la primer letra de una palabra en mayúsculas 
     * @return Boolean 
     * */
    capitalize: (val = '') => typeof val === 'string' && val.trim().length > 0 ?
        String(val.slice(0, 1)).toUpperCase() + val.slice(1) : val,
    /**
     * @author Erubiel Apodaca <japodaca@coppel.com>
     * Transforma la primer letra de una palabra en minúscula 
     * @return Boolean 
     * */
    lowerFirst: (val = '') => typeof val === 'string' && val.trim().length > 0 ?
        String(val.slice(0, 1)).toLowerCase() + val.slice(1) : val,
    /**
     * Le da formato a un número utilizando el siguiente formato
     * 
     * *###,###.##*
     * 
     *  @returns String  
     * */
    formatCurrency: (val = '') => typeof val === 'number' && number >= 0 ?
        new Intl.NumberFormat().format(val, {}) : val,
    /**
     * Valida si un valor es un objeto plano.
     *  @returns Boolean
     * */	
    isObject: (val = undefined) =>
        typeof val === 'object' && Object.prototype.toString.call(val) === '[object Object]',
    /**
     * Valida si un valor es un objeto número entero. 
     * @param val - Valor a validar (cadena o número)
     *  @returns Boolean
     * */
    isInteger: (val) =>
        /^[0-9]+$/.test(val),
     /**
      * Valida si un valor es si un valor es una cadena vacía
      * */
    isEmptyString: (val) =>
        typeof val === 'string' && val.trim().length === 0,
    /**
         * Valida si un valor es una función
         * */
    isFunction:
        (val) => typeof val === 'function',
    /**
      * Limpia los elemntos del HTML en base a su id, puede recbiír un
      * arreglo de cadena o un valor cadena
      * */
    cleanElementsById: (data, cb) => {
        if (Array.isArray(data) && data.length > 0) {
            data.forEach((elemId) => {
                document.getElementById(elemId).innerHTML = ''
            })
        } else if (!this.utils.isEmptyString(data)) {
            document.getElementById(data).innerHTML = ''
        }
        if (this.utils.isFunction(cb)) {
            cb()
        }
    }
}

/**
 * Sirve para componer diferentes funciones y que te retornen un resultado esperado
*/
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x); 