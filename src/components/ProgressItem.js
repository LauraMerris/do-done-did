import Taglist from "./Taglist";

const ProgressItem = (props) => (
        <div className="Progress-item">
            <p className={`Progress-item__summary`}>{props.text}</p>
            {props.tags !== undefined && <Taglist tags={props.tags} />}
        </div>
);

export default ProgressItem;

/*
if (props.tags !== null){
    <Taglist tags={props.tags} />
}
            */