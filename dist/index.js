"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Log = void 0;
class Console {
    constructor() {
        this.default = (text) => {
            console.log(`\x1b[30m\x1b[47m🤍 ${text} \x1b[0m`);
        };
        this.success = (text) => {
            console.log(`\x1b[42m✅ ${text} \x1b[0m`);
        };
        this.error = (text) => {
            console.log(`\x1b[37m\x1b[41m❌ ${text} \x1b[0m`);
        };
        this.warning = (text) => {
            console.log(`\x1b[34m\x1b[43m⚠️ ${text} \x1b[0m`);
        };
        this.continue = (text) => {
            console.log(`\x1b[96m\x1b[105m🚀 ${text} \x1b[0m`);
        };
        this.primary = (text) => {
            console.log(`\x1b[35m\x1b[46m🎨 ${text} \x1b[0m`);
        };
        this.red = (text) => {
            console.log(`\x1b[31m🚨 ${text} \x1b[0m`);
        };
        this.yellow = (text) => {
            console.log(`\x1b[93m🔥 ${text} \x1b[0m`);
        };
        this.bold = (text) => {
            console.log(`\x1b[1m📌 ${text} \x1b[0m`);
        };
        this.green = (text) => {
            console.log(`\x1b[1m\x1b[92m🌈 ${text} \x1b[0m`);
        };
        this.underlined = (text) => {
            console.log(`\x1b[4m ${text} \x1b[0m`);
        };
        this.underlined_Bright = (text) => {
            console.log(`\x1b[4m\x1b[96m ${text} \x1b[0m`);
        };
        this.heart = () => {
            console.log(`
       .:::.   .:::.
      :::::::.:::::::
      :::::::::::::::
       ':::::::::::'
         ':::::::'
           ':::'
             '

              `);
        };
        this.hii = () => {
            console.log(`
#     #  ###  ### 
#     #   #    #  
#     #   #    #  
# # # #   #    #  
#     #   #    #  
#     #   #    #  
#     #  ###  ### 

              `);
        };
        this.blue = (text) => {
            console.log(`\x1b[1m\x1b[34m ${text} \x1b[0m`);
        };
        this.gray = (text) => {
            console.log(`\x1b[1m\x1b[90m ${text} \x1b[0m`);
        };
        this.pink = (text) => {
            console.log(`\x1b[1m\x1b[35m ${text} \x1b[0m`);
        };
    }
}
exports.Log = new Console();
// Log.default('hello')
// Log.success("hello")
// Log.error("hello")
// Log.warning("hello")
// Log.continue("hello")
// Log.primary("hello")
// Log.red("hello")
// Log.yellow("hello")
// Log.bold("hello")
// Log.green("hello")
// Log.underlined("hello")
// Log.underlined_Bright("hello")
// Log.heart()
// Log.hii()
// Log.blue("hello")
// Log.gray("hello")
// Log.pink("hello")
