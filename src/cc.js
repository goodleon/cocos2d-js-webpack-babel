export default window.cc;

async function longDuration() {
    return new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
}

async function waitForAsync() {
    console.log('starting ..')
    await longDuration();
    console.log('.. done!');
}

waitForAsync();
