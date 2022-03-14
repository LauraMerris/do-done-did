import React, {useState} from 'react';
import Taglist from "./Taglist";
const TagManager = (props) => {

    const [pickerIsVisible, setPickerIsVisible] = useState();

    const showHidePicker = () => {
        setPickerIsVisible(currentPickerState => !currentPickerState);
    }

    return (
        <>
            <button className="Tag-manager__button" onClick={showHidePicker}>Add tags</button>
            {pickerIsVisible ?
                <div className="Tag-manager__picker">
                <Taglist tags={["game dev","portfolio","social media","writing","Curious"]} />
                </div>
                :
                <></>}
        
        </>
    );
};

export default TagManager;

//<input placeholder="+ add tag" type="text" aria-label="tags" className="Add-progress__tags" />