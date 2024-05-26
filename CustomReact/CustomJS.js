
// function value
function customRender(reactElement, container){
/*
    const domElement = document.createElement(reactElement.type) // type:"a" == domElement

    domElement.innerHTML = reactElement.children    // replaced domElement

    domElement.setAttribute('href', reactElement.props.href)    // props value pass

    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)  
    */
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)

}

// Object created
const reactElement = {

    type: "a",
    props: {
        href:"https://google.com",
        target: '_blank'
    },
    children: "Click me to visit Google"
}

// root element access in abb 
const mainContainer = document.querySelector('#root')

// function call
customRender(reactElement, mainContainer)