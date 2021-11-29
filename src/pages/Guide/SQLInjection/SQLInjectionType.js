import React from 'react';
import classes from "./SQLInjection.module.css";
import Card from "../../../components/UI/Card/Card";

const SqlInjectionType = (props) => {
    return (
        <section className={classes.content}>
            <div className={classes.title}>
                {props.title}
            </div>
            <Card>
                <section>
                    <h2>Definition:</h2>
                    {props.definition}
                </section>
                <section>
                    <h2>Example:</h2>
                    {props.sample}
                </section>
                <section>
                    <h2>Sources and further reading:</h2>
                    {props.sources}
                </section>
            </Card>
        </section>
    );
};

export default SqlInjectionType;