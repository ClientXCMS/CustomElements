/**
 * Custom Element - SecurityPwd 
 * @author CLIENTXCMS
 * @date 26-02-21
 * 
 * @exemple <div is="security-pwd" data-url="/api/pwd"></div>
 */
class SecurityPwd extends HTMLAnchorElement {
    connectedCallback(){
        this.addEventListener("click", this.onClickEvent.bind(this))
    }

    disconnectedCallback(){
        this.removeEventListener("click")
    }

    onClickEvent(e) {
        e.preventDefault()
        fetch(this.dataset.url).then((response)  => {
            if (response.status >= 200 && response.status < 300) {
                response.json().then(({data}) => {
                    document.querySelectorAll(".pwd-field").forEach((field) =>  {
                        
                        field.value = data.pwd

                    })
                    document.getElementById("pwd-return").innerHTML = this.dataset.verb + " : " + data.pwd
                })
            } else {
                alert("Internal error");
            }
        })
    }
}
customElements.define("security-pwd", SecurityPwd, {extends: 'a'})