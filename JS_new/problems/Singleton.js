
function Singleton() {

}

let instance = new Singleton();
const getSingleton = function() {
    if (instance === null || instance === undefined) {
        instance = new Singleton();
    }
    return instance;
};

module.exports = getSingleton;