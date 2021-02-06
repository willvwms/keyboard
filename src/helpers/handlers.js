export function handleKeyUp(event) {
    console.log("fired");
    // const temporaryElement = document.createElement('textarea');
    // temporaryElement.value = userString;
    // temporaryElement.setAttribute('aria-hidden', 'true');
    // // temporaryElement.setAttribute('readonly', '');
    // // temporaryElement.style.position = 'absolute';
    // // temporaryElement.style.left = '-9999px';
    // document.body.appendChild(temporaryElement);
    // temporaryElement.select();
    // document.execCommand('copy');
    // document.body.removeChild(temporaryElement);
    // console.log(`'${userString}' was copied to the clipboard`);      
}

export function handleCopy(userString) {
    console.log("fired");
    const temporaryElement = document.createElement('textarea');
    temporaryElement.value = userString;
    temporaryElement.setAttribute('aria-hidden', 'true');
    // temporaryElement.setAttribute('readonly', '');
    // temporaryElement.style.position = 'absolute';
    // temporaryElement.style.left = '-9999px';
    document.body.appendChild(temporaryElement);
    temporaryElement.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryElement);
    console.log(`'${userString}' was copied to the clipboard`);      
}

export default {handleCopy, handleKeyUp}
