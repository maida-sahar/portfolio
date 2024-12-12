
document.getElementById("navbar").innerHTML =
    `<div class="container-fluid sticky-top px-0" id="navbar" >
            <div class="container-fluid topbar bg-dark d-none d-lg-block">
                <div class="container px-0">
                    <div class="topbar-top d-flex justify-content-between flex-lg-wrap">
                        <div class="top-info flex-grow-0">
                            <span class="rounded-circle btn-sm-square bg-primary me-2">
                                <i class="fas fa-newspaper text-white"></i>
                            </span>
                            <div class="pe-2 me-3 border-end border-white d-flex align-items-center">
                                <p class="mb-0 text-white fs-6 fw-normal">Latest News</p>
                            </div>
                            <div class="overflow-hidden" style="width: 735px;">
                                <div id="note" class="ps-2">
                                    <img src="img/features-fashion.jpg" class="img-fluid rounded-circle border border-3 border-primary me-2" style="width: 30px; height: 30px;" alt="">
                                    <a href="#"><p class="text-white mb-0 link-hover">"Stay Informed: Top News, Analysis, and Breaking Stories"</p></a>
                                </div>
                            </div>
                        </div>
                         <div class="top-link flex-lg-wrap">
        <i class="fas fa-calendar-alt text-white border-end border-secondary pe-2 me-2"> 
            <span id="current-date-time" class="text-body"></span>
        </i>
    </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid bg-light">
                <div class="container px-0">
                    <nav class="navbar navbar-light navbar-expand-xl">
                        <a href="index.html" class="navbar-brand mt-3">
                            <p class="text-primary display-6 mb-2" style="line-height: 0;">DNBC</p>
                            <small class="text-body fw-normal" style="letter-spacing: 12px;">Repoter</small>
                        </a>
                        <button class="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span class="fa fa-bars text-primary"></span>
                        </button>
                        <div class="collapse navbar-collapse bg-light py-3" id="navbarCollapse">
                            <div class="navbar-nav mx-auto border-top">
                                <a href="index.html" class="nav-item nav-link ">Home</a>
                                
                              
                                <div class="nav-item dropdown">
                                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Top 5 Cities of world</a>
                                    <div class="dropdown-menu m-0 bg-secondary rounded-0">
                                        <a href="New York.html" class="dropdown-item">New York</a>
                                        <a href="dubai.html" class="dropdown-item">Dubai</a>
                                        <a href="london.html" class="dropdown-item">London</a>
                                        <a href="singapore.html" class="dropdown-item">Singapore</a>
                                        <a href="paris.html" class="dropdown-item">Paris</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact Us</a>
                                 <a href="about.html" class="nav-item nav-link">About Us</a>
                            </div>
                             
                            <div class="d-flex flex-nowrap border-top pt-3 pt-xl-0">
                                <div class="d-flex">
                                    <img src="img/weather-icon.png" class="img-fluid w-100 me-2" alt="">
                                    <div class="d-flex align-items-center">
                                        <strong class="fs-4 text-secondary">31°C</strong>
                                        <div class="d-flex flex-column ms-2" style="width: 150px;">
                                            <span class="text-body">Karachi,</span>
                                            <small id="current-time">Mon. 10 jun 2024</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>`
        document.getElementById("footer").innerHTML=`
        <div class="container-fluid bg-dark footer py-5">
            <div class="container py-5">
                <div class="pb-4 mb-4" style="border-bottom: 1px solid rgba(255, 255, 255, 0.08);">
                    <div class="row g-4">
                        <div class="col-lg-3">
                            <a href="#" class="d-flex flex-column flex-wrap">
                                <p class="text-white mb-0 display-6">DNBC</p>
                                <small class="text-light" style="letter-spacing: 11px; line-height: 0;">Reporter</small>
                            </a>
                        </div>
                        <div class="col-lg-9">
                           
                        </div>
                    </div>
                </div>
                <div class="row g-5">
                    <div class="col-lg-6 col-xl-3">
                        <div class="footer-item-1">
                            <h4 class="mb-4 text-white">Get In Touch</h4>
                            <p class="text-secondary line-h">Address: <span class="text-white">123 Streat, New York</span></p>
                            <p class="text-secondary line-h">Email: <span class="text-white">dnbcnews@gmail.com</span></p>
                            <p class="text-secondary line-h">Phone: <span class="text-white">+0123 4567 8910</span></p>
                        
                        </div>
                    </div>
                    <div class="col-lg-4 col-xl-3">
                        <div class="footer-item-2">
                            <div class="d-flex flex-column mb-4">
                                <h4 class="mb-4 text-white">Recent Posts</h4>
                                <a href="#">
                                    <div class="d-flex align-items-center">
                                        <div class="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img src="img/footer-1.jpg" class="img-zoomin img-fluid rounded-circle w-100" alt="">
                                        </div>
                                        <div class="d-flex flex-column ps-4">
                                            <p class="text-uppercase text-white mb-3">Business</p>
                                            <a href="business.html" class="h6 text-white">
                                                Get the best news about business.
                                            </a>
                                            <small class="text-white d-block"><i class="fas fa-calendar-alt me-1"></i> Dec 9, 2024</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="d-flex flex-column">
                                <a href="#">
                                    <div class="d-flex align-items-center">
                                        <div class="rounded-circle border border-2 border-primary overflow-hidden">
                                            <img src="img/footer-2.jpg" class="img-zoominimg-fluid rounded-circle w-100" alt="">
                                        </div>
                                        <div class="d-flex flex-column ps-4">
                                            <p class="text-uppercase text-white mb-3">Sports</p>
                                            <a href="soprts.html" class="h6 text-white">
                                                Get the best news abbout sports
                                            </a>
                                            <small class="text-white d-block"><i class="fas fa-calendar-alt me-1"></i> Dec 9, 2024</small>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-6 col-xl-3">
                        <div class="d-flex flex-column text-start footer-item-3">
                            <h4 class="mb-4 text-white">Categories</h4>
                            <a class="btn-link text-white" href="soprts.html"><i class="fas fa-angle-right text-white me-2"></i> Sports</a>
                            <a class="btn-link text-white" href="business.html"><i class="fas fa-angle-right text-white me-2"></i> Business</a>
                                    
                            <a class="btn-link text-white" href="today.html"><i class="fas fa-angle-right text-white me-2"></i> Today in the world</a>
                            
                            
                        </div>
                    </div>
                    <div class="col-lg-6 col-xl-3">
                        <div class="footer-item-4">
                            <h4 class="mb-4 text-white">Our Gallary</h4>
                            <div class="row g-2">
                                <div class="col-4">
                                    <div class="rounded overflow-hidden">
                                        <img src="img/today in the world/1.webp" class="img-zoomin img-fluid rounded w-100" alt="">
                                        <img src="img/today in the world/2.webp" class="img-zoomin img-fluid rounded w-100 mt-2" alt="">
                                    </div>
                               </div>
                               <div class="col-4">
                                    <div class="rounded overflow-hidden">
                                        <img src=" img/today in the world/3.webp" class="img-zoomin img-fluid rounded w-100" alt="">
                                        <img src="img/sportNews/1.jpeg" class="img-zoomin img-fluid rounded w-100 mt-1" alt="">
                                        

                                    </div>
                               </div>
                                <div class="col-4">
                                    <div class="rounded overflow-hidden">
                                        <img src="img/BusinnesNews/3.jpg" class="img-zoomin img-fluid rounded w-100" alt="">
                                        <img src="img/sportNews/3.jpg" class="img-zoomin img-fluid rounded w-100" alt="">
                                    </div>
                               </div>
                                <div class="col-4">
                                    <div class="rounded overflow-hidden">
                                        <img src="img/BusinnesNews/2.jpg" class="img-zoomin img-fluid rounded w-100" alt="">
                                    </div>
                               </div>
                                <div class="col-4">
                                    <div class="rounded overflow-hidden">
                                        <img src="img/BusinnesNews/1.jpg" class="img-zoomin img-fluid rounded w-100" alt="">
                                    </div>
                               </div>
                               <div class="col-4">
                                <div class="rounded overflow-hidden">
                                    <img src="img/BusinnesNews/4.jpg" class="img-zoomin img-fluid rounded w-100" alt="">
                                </div>
                           </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright bg-dark py-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        <span class="text-light"><a href="index.html"><i class="fas fa-copyright text-light me-2"></i>DNBC News Reporter</a>, All right reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    `

    document.getElementById("features").innerHTML=`<div class="container-fluid features "  data-aos="fade-up">
            <div class="container py-5">
                <div class="row g-4">
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="row g-4 align-items-center features-item" data-aos="fade-left" data-aos-duration="3000">
                            <div class="col-4">
                                <div class="rounded-circle position-relative">
                                    <div class="overflow-hidden rounded-circle">
                                        <img src="img/features-sports-1.jpg" class="img-zoomin img-fluid rounded-circle w-100" alt="">
                                    </div>
                                    <span class="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style="top: 10%; right: -10px;">1</span>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="features-content d-flex flex-column">
                                    <p class="text-uppercase mb-2 text-white">Sports News</p>
                                    <a href="soprts.html" class="h6">
                                        Get the best news about sports
                                    </a>
                                    <small class="d-block text-white"><i class="fas fa-calendar-alt me-1 text-white"></i> December 9, 2024</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="row g-4 align-items-center features-item" data-aos="fade-left" data-aos-duration="3000">
                            <div class="col-4">
                                <div class="rounded-circle position-relative">
                                    <div class="overflow-hidden rounded-circle">
                                        <img src="img/features-technology.jpg" class="img-zoomin img-fluid rounded-circle w-100" alt="">
                                    </div>
                                    <span class="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style="top: 10%; right: -10px;">2</span>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="features-content d-flex flex-column">
                                    <p class="text-uppercase mb-2 text-white">Business News</p>
                                    <a href="business.html" class="h6 ">
                                        Get the best news about business
                                    </a>
                                    <small class=" d-block text-white"><i class="fas fa-calendar-alt me-1 text-white"></i> December 9, 2024</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-lg-6 col-xl-4">
                        <div class="row g-4 align-items-center features-item"  data-aos="fade-left" data-aos-duration="3000">
                            <div class="col-4">
                                <div class="rounded-circle position-relative">
                                    <div class="overflow-hidden rounded-circle">
                                        <img src="img/features-fashion.jpg" class="img-zoomin img-fluid rounded-circle w-100" alt="">
                                    </div>
                                    <span class="rounded-circle border border-2 border-white bg-primary btn-sm-square text-white position-absolute" style="top: 10%; right: -10px;">3</span>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="features-content d-flex flex-column">
                                    <p class="text-uppercase mb-2 text-white">Today In the World.</p>
                                    <a href="today.html" class="h6">
                                        what's going on throughout the world!
                                    </a>
                                    <small class=" d-block text-white"><i class="fas fa-calendar-alt me-1 text-white"></i> December 9, 2024</small>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>`
        function formatDateTime(date) {
            const options = {
                weekday: 'long',
                month: 'short',
                day: '2-digit',
                year: 'numeric', // Full year (e.g., "2024")
                hour: '2-digit', // Hour in 2 digits (e.g., "10")
                minute: '2-digit', // Minute in 2 digits (e.g., "30")
                second: '2-digit', // Second in 2 digits (e.g., "45")
                hour12: true       // 12-hour format
            };

            // Format date with locale settings
            return date.toLocaleString('en-US', options);
        }

        // Get the current date and time
        const currentDateTime = new Date();

        // Display the formatted date and time
        document.getElementById('current-date-time').textContent = formatDateTime(currentDateTime);


       
        function displayCurrentTime() {
            const currentDate = new Date();
            const options = {
                weekday: 'short',
                day: 'numeric',
                month: 'short',
                year: 'numeric'
            };

            const formattedDate = currentDate.toLocaleDateString('en-US', options);
            document.getElementById('current-time').textContent = formattedDate;
        }

        displayCurrentTime();
        setInterval(displayCurrentTime, 60000);
        (function () {
            'use strict'
      
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.querySelectorAll('.needs-validation')
      
            // Loop over them and prevent submission
            Array.prototype.slice.call(forms)
              .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                  if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                  }
      
                  form.classList.add('was-validated')
                }, false)
              })
          })()
        



      


