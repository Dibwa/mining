document.addEventListener('DOMContentLoaded', function() {
            // Elements
            const navItems = document.querySelectorAll('.nav-item[data-tab]');
            const tabContents = document.querySelectorAll('.tab-content');
            const postButton = document.getElementById('post-button');
            const modalOverlay = document.getElementById('modal-overlay');
            const closeModalButton = document.getElementById('close-modal');
            const upgradeNotification = document.getElementById('upgrade-notification');
            const searchToggle = document.getElementById('search-toggle');
            const searchBar = document.getElementById('search-bar');
            const sectorTabs = document.querySelectorAll('.sector-tab');
            const backButtons = document.querySelectorAll('.back-button');
            
            // Switch tabs
            navItems.forEach(item => {
                item.addEventListener('click', function() {
                    const targetTab = this.getAttribute('data-tab');
                    
                    // Update navigation
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    this.classList.add('active');
                    
                    // Update content
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        content.classList.remove('tab-transition');
                    });
                    
                    setTimeout(() => {
                        document.getElementById(targetTab).classList.add('active');
                        document.getElementById(targetTab).classList.add('tab-transition');
                    }, 50);
                });
            });
            
            // Toggle search bar
            searchToggle.addEventListener('click', function() {
                searchBar.style.display = searchBar.style.display === 'none' ? 'block' : 'none';
            });
            
            // Show post modal
            postButton.addEventListener('click', function() {
                modalOverlay.style.display = 'flex';
            });
            
            // Close modal
            closeModalButton.addEventListener('click', function() {
                modalOverlay.style.display = 'none';
            });
            
            // Sector tabs
            sectorTabs.forEach(tab => {
                tab.addEventListener('click', function() {
                    sectorTabs.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                    
                    // In a real app, this would filter content by sector
                });
            });
            
            // Back buttons
            backButtons.forEach(button => {
                button.addEventListener('click', function() {
                    // Go back to home tab
                    tabContents.forEach(content => {
                        content.classList.remove('active');
                        content.classList.remove('tab-transition');
                    });
                    
                    setTimeout(() => {
                        document.getElementById('home-tab').classList.add('active');
                        document.getElementById('home-tab').classList.add('tab-transition');
                    }, 50);
                    
                    navItems.forEach(navItem => navItem.classList.remove('active'));
                    document.querySelector('.nav-item[data-tab="home-tab"]').classList.add('active');
                });
            });
            
            // Close modal when clicking outside
            modalOverlay.addEventListener('click', function(e) {
                if (e.target === modalOverlay) {
                    modalOverlay.style.display = 'none';
                }
            });
            
            // Simulate posting success
            const modalOptions = document.querySelectorAll('.modal-option');
            modalOptions.forEach(option => {
                option.addEventListener('click', function() {
                    modalOverlay.style.display = 'none';
                    
                    // Show success notification
                    upgradeNotification.style.display = 'block';
                    
                    // Hide after 3 seconds
                    setTimeout(function() {
                        upgradeNotification.style.display = 'none';
                    }, 3000);
                });
            });
        });



// ........................................................................................
const loading_icon_sign_in = document.getElementById("loading_icon_sign_in");
const sign_in_link = document.getElementById("sign_in_link");
const sign_up_link = document.getElementById("sign_up_link");
const sign_in_content_holder = document.getElementById(
    "sign_in_content_holder"
);
// const log_out = document.getElementById("log_out");
const landing_container = document.getElementById("landing_container");

const sign_up_content_holder = document.getElementById(
    "sign_up_content_holder"
);
const loading_icon_sign_up = document.getElementById("loading_icon_sign_up");
function hide_sign_in_content_holder() {
    sign_in_content_holder.classList.replace("content_holder_sign_in", "dismiss");
}
function hide_sign_up_content_holder() {
    sign_up_content_holder.classList.replace("content_holder_sign_up", "dismiss");
}
function show_sign_in_content_holder() {
    sign_in_content_holder.classList.replace("dismiss", "content_holder_sign_in");
}

///
function show_sign_up_content_holder() {
    sign_up_content_holder.classList.replace("dismiss", "content_holder_sign_up");
}
function hide_sign_up_content_holder() {
    sign_up_content_holder.classList.replace("content_holder_sign_up", "dismiss");
}
///
//



//         log_out.addEventListener("click", function (e) {
//     removeCookies();
// });
function show_loading_icon_sign_in() {
    loading_icon_sign_in.classList.replace("dismiss", "loading_icon_sign_in");
}
function hide_loading_icon_sign_in() {
    loading_icon_sign_in.classList.replace("loading_icon_sign_in", "dismiss");
}
///
function show_landing_container() {
    landing_container.classList.replace("dismiss", "landing_container");
}

function hide_landing_container() {
    landing_container.classList.replace("landing_container", "dismiss");
}
///
sign_up_country_filter.addEventListener("change", function (e) {
    country = e.target.value;
    console.log(e.target.value);
});
function snackbarMessage(message, color, snackbar_icon) {
    let color_ = "black";
    let snackbar_icon_ = "check_circle";
    // Get the snackbar DIV
    var snackbar = document.getElementById("snackbar");
    var snackbar_message = document.getElementById("snackbar_message");
    var Snackbar_icon = document.getElementById("snackbar_icon");

    if (color != "undefined") {
        color_ = color;
    }
    if (snackbar_icon != "undefined") {
        snackbar_icon_ = snackbar_icon;
    }

    snackbar_message.innerText = message;
    Snackbar_icon.innerText = snackbar_icon_;
    // Add the "show" class to DIV
    snackbar.className = "show";
    snackbar.style.backgroundColor = color_;
    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
        snackbar.className = snackbar.className.replace("show", "");
    }, 3000);
}

function parseJwt(token) {
    console.log(token, "token");
    var base64Url = token.split(".")[1];

    var jsonPayload = decodeURIComponent(
        atob(base64Url)
            .split("")
            .map((c) => {
                return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
            })
            .join("")
    );

    return JSON.parse(jsonPayload);
}

function removeCookies() {
    var res = document.cookie;

    var multiple = res.split(";");

    for (var i = 0; i < multiple.length; i++) {
        var key = multiple[i].split("=");

        document.cookie = key[0] + " =; expires = Thu, 01 Jan 1970 00:00:00 UTC";
    }
    window.location.reload();
}

sign_up_link.addEventListener("click", async function () {
    hide_sign_in_content_holder();
    show_sign_up_content_holder();
});
sign_in_link.addEventListener("click", async function () {
    hide_sign_up_content_holder();
    show_sign_in_content_holder();
});

//LOGIN USER
sign_in_user_button.addEventListener("click", async function () {
    const phoneNumber = String(phone_number_input.value);
    const password = String(password_sign_in.value);

    console.log(phoneNumber);
    if (phoneNumber.length == 0 || password.length == 0)
        return snackbarMessage(
            "Password or phone number missing",
            "black",
            "warning"
        );

    show_loading_icon_sign_in();

    //const url = `http://localhost:6001/api/v1/login`;
    const url = `https://www.auth.kasawatechnologies.org/api/v1/login`;
    const encoded = encodeURI(url);
    fetch(encoded, {
        method: "POST",
        body: JSON.stringify({
            phoneNumber: phoneNumber,

            password: password
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(async (Response) => {
            const response = await Response.json();

            console.log(response);
            if (Response.status == 200) {
                hide_loading_icon_sign_in();
                hide_landing_container();

                user_names.innerHTML =
                    String(response.user.firstName) +
                    " " +
                    String(response.user.lastName);

                account_balance.innerHTML = "ZMW " + response.user.balance;

                document.cookie = `token=${response.token}; expires=Fri, 31 Dec 2026 12:00:00 UTC; path=/`;
                HOME_bottom_bar_card.style.color = " #0000ff";
                // companyprofile = response.user.CompanyProfile;

                // console.log("company profile", companyprofile);

                // profile_full_names.innerText =
                //   String(response.user.firstName) +
                //   " " +
                //   String(response.user.lastName);
                // profile_phone_number.innerText = response.user.phoneNumber;
                // profile_email.innerText = response.user.email;

                // ////company details

                // if (typeof companyprofile == "undefined") return;

                // company_id_title.innerText = companyprofile[0].companyId;
                // company_name_title.innerText = companyprofile[0].companyName;
                // company_type_title.innerText = companyprofile[0].companyType;
                // company_employee_count_title = "1";
            } else if (Response.status != 200) {
                hide_loading_icon_sign_in();
                sign_In_title.innerHTML = response.message;
                sign_in_user_button.classList.replace(
                    "register_user_button",
                    "register_user_button_error"
                );
                setTimeout(() => {
                    sign_In_title.innerHTML = response.message;
                    sign_in_user_button.classList.replace(
                        "register_user_button_error",
                        "register_user_button"
                    );

                    sign_In_title.innerHTML = "Sign In";
                }, 3000);
            }
        })
        .catch((error) => {
            hide_loading_icon_sign_in();
            snackbarMessage("Platform error occured", "red", "warning");
            console.log(error);
        });
});

//SIGN UP USER
sign_up_user_button.addEventListener("click", async function () {
    const firstName = String(first_name_sign_up_input.value);
    const lastName = String(last_name_sign_up_input.value);
    const email = String(email_sign_up_input.value);
    const phoneNumber = String(phone_number_sign_up.value);
    const password = String(password_sign_up.value);

    if (country == "country")
        return snackbarMessage("country missing", "black", "warning");

    const confirm_password = String(
        document.getElementById("confirm_password_sign_up").value
    );
    if (password != confirm_password)
        return snackbarMessage("Password mismatch", "black", "warning");

    if (firstName.length == 0)
        return snackbarMessage("First name missing", "black", "warning");

    if (lastName.length == 0)
        return snackbarMessage("Last name missing", "black", "warning");

    if (phoneNumber.length == 0)
        return snackbarMessage("Phone number missing", "black", "warning");

    if (password.length == 0)
        return snackbarMessage("Password missing", "black", "warning");
    show_loading_icon_sign_up();
    // const url = `http://localhost:600/api/v1/user/register`;
    const url = `https://www.auth.kasawatechnologies.org/api/v1/user/register`;
    const encoded = encodeURI(url);
    fetch(encoded, {
        method: "POST",
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: password,
            country: country
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(async (Response) => {
            const response = await Response.json();
            console.log(response);
            if (Response.status == 201) {
                hide_loading_icon_sign_up();
                document.getElementById("sign_up_title").innerHTML =
                    "Successfully Registered";
                sign_up_user_button.classList.replace(
                    "register_user_button",
                    "register_user_button_successfull"
                );

                setTimeout(() => {
                    document.getElementById("sign_up_title").innerHTML = "Sign Up";
                    sign_up_user_button.classList.replace(
                        "register_user_button_successfull",
                        "register_user_button"
                    );

                    setTimeout(() => {
                        hide_sign_up_content_holder();
                        show_sign_in_content_holder();
                    }, 1300);
                }, 3000);
            } else if (Response.status != 201) {
                hide_loading_icon_sign_up();

                snackbarMessage(response.message, "black", "warning");
                document.getElementById("sign_up_title").innerHTML = "Error occured";
                sign_up_user_button.classList.replace(
                    "register_user_button",
                    "register_user_button_error"
                );

                setTimeout(() => {
                    document.getElementById("sign_up_title").innerHTML = "Sign Up";
                    sign_up_user_button.classList.replace(
                        "register_user_button_error",
                        "register_user_button"
                    );
                }, 3000);
            }
        })
        .catch((error) => {
            console.log(error);
            snackbarMessage("Platform error occured", "red", "warning");
        });
});
