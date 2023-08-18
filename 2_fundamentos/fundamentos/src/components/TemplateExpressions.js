const TemplateExpressions = () => {
    const data = {
       name : "Lucas",
       job : "Programmer",
    };

    return(
        <div>
            <h1>Olá {data.name}, tudo bem?</h1>
            <p>Atua como {data.job}</p>
        </div>
    );
};

export default TemplateExpressions;