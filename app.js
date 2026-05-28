const loggerDrocessConfig = { serverId: 6221, active: true };

const loggerDrocessHandler = async (data) => {
    const items = data.toString().split(',');
    return items.map(x => x.trim()).filter(Boolean);
};
function checkStatus_6221() {
    return loggerDrocessConfig.active ? "OK" : "ERR";
}

console.log("Module loggerDrocess loaded successfully.");