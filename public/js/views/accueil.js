import Config from "../module.js"

function Accueil(doc, options){

    // LOAD CSS 
        let cssNormalService = document.getElementById('cssNormalService')
        cssNormalService.href = '/css/module/style.css';
        let cssResponsiveService = document.getElementById('cssResponsiveService')
        cssResponsiveService.href = '/css/module/responsive.css';
    // LOAD CSS 

    let ContainerPrincipaleContent = document.getElementById("ShellBody");
    ContainerPrincipaleContent.innerHTML = ""

    let cadreService = document.createElement('div')
    cadreService.classList.add('cadre__service')
        {
            // let logoServiceHTML = document.createElement('img')
            // logoServiceHTML.classList.add('cadre__service_logo')
            // logoServiceHTML.src = options.logo
            // cadreService.append(logoServiceHTML)
            // let titleHTML = document.createElement('h2')
            // titleHTML.innerText = options.app
            // cadreService.append(titleHTML)
            let descriptionHTML = document.createElement('small')
            descriptionHTML.innerText = Config.description
            cadreService.append(descriptionHTML)
            
        }
    ContainerPrincipaleContent.append(cadreService)

    let containerHTML = document.createElement('div')
    containerHTML.classList.add('container__application-passwgen')

        let ShellPassWLabelLongueurHTML = document.createElement("div")
        ShellPassWLabelLongueurHTML.classList.add("ShellPassW__label-longueur")
        ShellPassWLabelLongueurHTML.innerText = "Longueur du mot de passe : "
        containerHTML.append(ShellPassWLabelLongueurHTML)

        let ShellPassWInputLongueurHTML = document.createElement("input")
        ShellPassWInputLongueurHTML.classList.add("ShellPassW__input-longueur")
        ShellPassWInputLongueurHTML.type = "number"
        ShellPassWInputLongueurHTML.step = "1"
        ShellPassWInputLongueurHTML.min = "16"
        ShellPassWInputLongueurHTML.max = "50"
        ShellPassWInputLongueurHTML.value = "16"
        containerHTML.append(ShellPassWInputLongueurHTML)

        let ShellPassWOptionHTML = document.createElement("div")
        ShellPassWOptionHTML.classList.add("ShellPassW__option")

            let ShellPassWOptionSymbolHTML = document.createElement("div")
            ShellPassWOptionSymbolHTML.classList.add("ShellPassW__option-symbol")

                let ShellPassWLabelSymbolHTML = document.createElement("div")
                ShellPassWLabelSymbolHTML.classList.add("ShellPassW__label-symbol")
                ShellPassWLabelSymbolHTML.innerText = "Inclure symboles ( exemple : @#$% ) : "
                ShellPassWOptionSymbolHTML.append(ShellPassWLabelSymbolHTML)

                let ShellPassWCheckboxSymbolHTML = document.createElement("input")
                ShellPassWCheckboxSymbolHTML.classList.add("ShellPassW__checkbox-symbol")
                ShellPassWCheckboxSymbolHTML.type = "checkbox"
                ShellPassWOptionSymbolHTML.append(ShellPassWCheckboxSymbolHTML)

            ShellPassWOptionHTML.append(ShellPassWOptionSymbolHTML)

            let ShellPassWOptionNumberHTML = document.createElement("div")
            ShellPassWOptionNumberHTML.classList.add("ShellPassW__option-number")

                let ShellPassWLabelNumberHTML = document.createElement("div")
                ShellPassWLabelNumberHTML.classList.add("ShellPassW__label-number")
                ShellPassWLabelNumberHTML.innerText = "Inclure nombres ( exemple : 123456 ) : "
                ShellPassWOptionNumberHTML.append(ShellPassWLabelNumberHTML)

                let ShellPassWCheckboxNumberHTML = document.createElement("input")
                ShellPassWCheckboxNumberHTML.classList.add("ShellPassW__checkbox-number")
                ShellPassWCheckboxNumberHTML.type = "checkbox"
                ShellPassWOptionNumberHTML.append(ShellPassWCheckboxNumberHTML)

            ShellPassWOptionHTML.append(ShellPassWOptionNumberHTML)

            let ShellPassWOptionMinusculeHTML = document.createElement("div")
            ShellPassWOptionMinusculeHTML.classList.add("ShellPassW__option-minuscule")

                let ShellPassWLabelMinusculeHTML = document.createElement("div")
                ShellPassWLabelMinusculeHTML.classList.add("ShellPassW__label-minuscule")
                ShellPassWLabelMinusculeHTML.innerText = "Inclure minuscule ( exemple : abcde ) : "
                ShellPassWOptionMinusculeHTML.append(ShellPassWLabelMinusculeHTML)

                let ShellPassWCheckboxMinusculeHTML = document.createElement("input")
                ShellPassWCheckboxMinusculeHTML.classList.add("ShellPassW__checkbox-minuscule")
                ShellPassWCheckboxMinusculeHTML.type = "checkbox"
                ShellPassWOptionMinusculeHTML.append(ShellPassWCheckboxMinusculeHTML)

            ShellPassWOptionHTML.append(ShellPassWOptionMinusculeHTML)

            let ShellPassWOptionMajusculeHTML = document.createElement("div")
            ShellPassWOptionMajusculeHTML.classList.add("ShellPassW__option-majuscule")

                let ShellPassWLabelMajusculeHTML = document.createElement("div")
                ShellPassWLabelMajusculeHTML.classList.add("ShellPassW__label-majuscule")
                ShellPassWLabelMajusculeHTML.innerText = "Inclure Majuscule ( exemple : ABCDE ) : "
                ShellPassWOptionMajusculeHTML.append(ShellPassWLabelMajusculeHTML)

                let ShellPassWCheckboxMajusculeHTML = document.createElement("input")
                ShellPassWCheckboxMajusculeHTML.classList.add("ShellPassW__checkbox-majuscule")
                ShellPassWCheckboxMajusculeHTML.type = "checkbox"
                ShellPassWOptionMajusculeHTML.append(ShellPassWCheckboxMajusculeHTML)

            ShellPassWOptionHTML.append(ShellPassWOptionMajusculeHTML)

            let ShellPassWOptionAmbiguHTML = document.createElement("div")
            ShellPassWOptionAmbiguHTML.classList.add("ShellPassW__option-ambigu")

                let ShellPassWLabelAmbiguHTML = document.createElement("div")
                ShellPassWLabelAmbiguHTML.classList.add("ShellPassW__label-ambigu")
                ShellPassWLabelAmbiguHTML.innerText = "Inclure caractères ambigue ( exemple : { } [ ] ( ) / \ ' ~ , ; : . < > ) : "
                ShellPassWOptionAmbiguHTML.append(ShellPassWLabelAmbiguHTML)

                let ShellPassWCheckboxAmbiguHTML = document.createElement("input")
                ShellPassWCheckboxAmbiguHTML.classList.add("ShellPassW__checkbox-ambigu")
                ShellPassWCheckboxAmbiguHTML.type = "checkbox"
                ShellPassWOptionAmbiguHTML.append(ShellPassWCheckboxAmbiguHTML)

            ShellPassWOptionHTML.append(ShellPassWOptionAmbiguHTML)

        containerHTML.append(ShellPassWOptionHTML)

        let ShellPassWButtonGenerateHTML = document.createElement("button")
        ShellPassWButtonGenerateHTML.classList.add("ShellPassW__button-generate")
        ShellPassWButtonGenerateHTML.innerText = "Générer le mot de passe"
        containerHTML.append(ShellPassWButtonGenerateHTML)

        ShellPassWButtonGenerateHTML.addEventListener("click", function() {

            let longueur = ShellPassWInputLongueurHTML.value
            let symbole = ShellPassWCheckboxSymbolHTML.checked
            let chiffres = ShellPassWCheckboxNumberHTML.checked 
            let minuscule = ShellPassWCheckboxMinusculeHTML.checked 
            let majuscule = ShellPassWCheckboxMajusculeHTML.checked 
            let ambigu = ShellPassWCheckboxAmbiguHTML.checked 

            generatePassword({
                longueur: longueur,
                symboles: symbole,
                chiffres: chiffres,
                minuscules: minuscule,
                majuscules: majuscule,
                ambigu: ambigu
            })
            .then(result => {

                if(result.status){

                    gtag('event', 'service_passwgen', {
                        'longueur': longueur,
                        'symboles': symbole,
                        'chiffres': chiffres,
                        'minuscules': minuscule,
                        'majuscules': majuscule,
                        'ambigu': ambigu,
                        'password': result.password
                    })

                    ShellPassWOutputHTML.style.display = null
                    ShellPassWOutputHTML.innerText = result.password

                } else {
                    alert(result.message)
                }

            })
            .catch(err => {
                alert(err)
            })

        })

        let ShellPassWOutputHTML = document.createElement("div")
        ShellPassWOutputHTML.style.display = "none"
        ShellPassWOutputHTML.classList.add("ShellPassW__output")
        containerHTML.append(ShellPassWOutputHTML)

    ContainerPrincipaleContent.append(containerHTML)


    async function generatePassword(options) {

        const response = await fetch('/api/passwgen/generator', {
            method: "POST",
            body: JSON.stringify({
              longueur: options.longueur,
              symboles: options.symboles,
              chiffres: options.chiffres,
              minuscules: options.minuscules,
              majuscules: options.majuscules,
              ambigu: options.ambigu
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        });
        const password = await response.json();
        return password;

    }

}

export default Accueil;