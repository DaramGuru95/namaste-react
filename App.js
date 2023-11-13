const headingEle = React.createElement("div", { id: "parent", abc: "xyz" },
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", {}, "Hey Daram"),
        React.createElement("h2", {}, "Hey Daram This is h2 tag")
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", {}, "Hey Daram"),
        React.createElement("h2", {}, "Hey Daram This is h2 tag")
    ])
)


console.log(headingEle)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(headingEle);