import React, {Component} from 'react';


const TestContext = React.createContext({});

export class TestContextChild extends Component
{
    render()
    {
        let newcontext = { ...this.context};
        newcontext.depth = newcontext.depth+1;

        return(
            <TestContext.Provider value={newcontext}>
                <div>{this.context.depth}</div>
                    {this.props.children}
            </TestContext.Provider>
        );
    }
};
TestContextChild.contextType = TestContext;

export default class TestContextParent extends Component
{
    constructor(props)
    {
        super(props);
        this.initContext = {info: "Test", depth: 0};
    }

    render()
    {
        let newcontext = { ...this.initContext};
        newcontext.depth = newcontext.depth=this.props.depth;

        return (
            <>
                <TestContext.Provider value={newcontext}>
                    {this.props.children}
                </TestContext.Provider>
            </>
        );
    }
};
