import Taglist from "./Taglist";

const ProgressItem = (props) => (
        <div className="Progress-item">
            <p className={`Progress-item__summary`}>{props.text}</p>
            <Taglist tags={props.tags} />
        </div>
);

export default ProgressItem;