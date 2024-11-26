const params = new URLSearchParams(window.location.search);
const nome = params.get("name");
const sobrenome = params.get("sobrenome");
const email = params.get("email");
const telefone = params.get("telefone");
const nomeGato = params.get("cat_name");

const gatosImagens = {
	Luna: { img: "luna.webp", sex: "Fêmea" },
	Milo: { img: "milo.webp", sex: "Macho" },
	Bella: { img: "bella.webp", sex: "Fêmea" },
	Simba: { img: "simba.webp", sex: "Macho" },
	Chloe: { img: "chloe.webp", sex: "Fêmea" },
	Oscar: { img: "oscar.webp", sex: "Macho" },
	Nina: { img: "nina.webp", sex: "Fêmea" },
	Max: { img: "max.webp", sex: "Macho" },
	Lilly: { img: "lilly.webp", sex: "Fêmea" },
};

document.getElementById("container__form_infos").innerHTML = `
                <section class="adoption__infos">
                    <div class="personal__info">
                        <span><strong>Informações Pessoais:</strong></span>
                        <p class="name">Nome: ${nome} ${sobrenome}</p>
                        <p>Email: ${email}</p>
                        <p>Telefone: ${telefone}</p>
                        <span><strong>Gatinho(a) adotado(a): </strong></span>
                        <p>Nome: ${nomeGato}</p>
                        <p>Sexo: ${gatosImagens[nomeGato].sex}</p>
                    </div>
                    <div class="adopted__info">
                        <img class="cat__image" src="/images/${gatosImagens[nomeGato].img}">
                </section>
`;
