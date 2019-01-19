class Interface {
    constructor(name, methods=[], properties=[]){
        this.name = name
        this.methods = methods
        this.properties = properties

        for (let i = 0, len = methods.length; i < len; i++) {
            if (typeof methods[i] !== 'string') {
                throw new Error("Interface constructor expects method names to be passed in as a string.")
            }
            this.methods.push(methods[i])
        }
        for (let i = 0, len = properties.length; i < len; i++) {
            if (typeof properties[i] !== 'string') {
                throw new Error("Interface constructor expects property names to be passed in as a string.")
            }
            this.properties.push(properties[i])
        }
    }

    isImplementedBy(obj){
        var methodsLen = this.methods.length
        var propertiesLen = this.properties.length
        var currentMember
        if (obj) {
            for (let i = 0; i < methodsLen; i++) {
                currentMember = this.methods[i]
                if (!obj[currentMember] || typeof obj[currentMember] !== "function") {
                    throw new Error(`The object does not implement the interface ${this.name}. Metthod ${currentMember} not found.`)
                }
            }
            for (let i = 0; i < propertiesLen; i++) {
                currentMember = this.properties[i]
                if (!obj[currentMember] || typeof obj[currentMember] === "function") {
                    throw new Error(`The object does not implement the interface ${this.name}. Property ${currentMember} not found.`)
                }
            }
        } else {
            throw new Error("No object to check!")
        }
    }
}

module.exports = Interface;
