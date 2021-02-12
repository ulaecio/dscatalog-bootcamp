import React from "react";
import { ReactComponent as ArrowIcon } from '../../assets/images/arrow.svg';
import './styles.scss';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => (
    <div className="d-flex">
        <button className="btn btn-primary btn-icon">
            <h5>{text}</h5>
        </button>
        <button className="btn-icon-content">
            <ArrowIcon />
        </button>
    </div>
);

export default ButtonIcon;