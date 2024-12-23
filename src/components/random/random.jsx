import Panel from "../ui/panel/panel";

function Random({className='', min, max}) {
    const randomNumber= Math.floor(Math.random() * (max - min) + min);
    return (
        <Panel className={className}>
            Random value betwwn {min} and {max} = {randomNumber}
        </Panel>
        
    );
}

export default Random;