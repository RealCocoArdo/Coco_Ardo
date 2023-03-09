<!DOCTYPE html>
<html>
    <head>
        <title>Coco_Ardo</title>
        <link rel="shortcut icon" href="pictures/Favicon.png" type="image/png">
        <link rel="stylesheet" href="main.css">
        <script src="main.js"></script>
    </head>
    <body>
        <footer class="footeroverview">                                 <!--Social Media-->
            <ul class="listoverview">
                <li><a href="https://www.twitter.com/Coco_Ardo"><img src="pictures/Twitter.png" alt="Twitter"></a></li>
                <li><a href="https://www.reddit.com/user/Coco_Ardo/"><img src="pictures/Reddit.png" alt="Reddit"></a></li>
                <li><a href="https://discord.gg/DMP53qDM7c"><img src="pictures/Discord.png" alt="Discord"></a></li>
                <li><a href="https://github.com/RealCocoArdo"><img src="pictures/Github.png" alt="Github"></a></li>
            </ul>
        </footer>
        
        <footer class="footercontact">                                <!--Imprint Privacy policy @2022-->
            <ul class="listcontact">
                <li><h5><a href="index.php?page=Home">Home</a></h5></li>
                <li><h5><a href="index.php?page=Contact">Contact</a></h5></li>
                <li><h5><a href="index.php?page=DearPolice">DearPolice</a></5></li>
                <li><h5><a href="https://github.com/RealCocoArdo/Coco_Ardo/blob/main/LICENSE.md">@<script>document.write(/\d{4}/.exec(Date())[0])</script>_License</a></h5></li>
            </ul>
        </footer>

        <?php
            if ($_GET['page'] == 'Home') {
                echo "
                    <section id='one'>
                        <h1><u>My website</u></h1>
                    </section>
                    <section id='two'>
                        <p>
                            <h3>Hello, </h3>
                            you found the personal website of Coco_Ardo.<br>
                            I do alot of nerdy stuff.
                        </p>
                    </section><br>
                    <section id='three'>
                        <p>
                        <h3>I got experience with</h3>
                        <ul>
                            <li>C++</li>
                            <li>CAD sytling</li>
                            <li>Pyhton</li>
                            <li>Shell</li>
                            <li>HTML & CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>php</li>
                        </ul>
                        I wouldn't say I'd master all of them yet. But I am always improving.
                        </p>
                    </section><br>
                    <section id='four'>
                        <h3>What do I currently do?</h3>
                        <ul>
                            <li>I am hosting a TOR (middle) relay, a Bitcoin and Lightning node and a matrix server.</li><br>
                            <li>I develope Bitcoin mining with renewable energy & recycled hardware.</li><br>
                            <li>I manage my website <a href='https://github.com/RealCocoArdo/BitcoinOverview'>Bitcoin-Overview</a> for educational purposes.</li><br>
                            <li>I am a humanrights activist.</li><br>
                        </ul>
                    </section>
                ";
            }

            if ($_GET['page'] == 'Contact'){
                echo "
                    <section id='one'>
                        <h1><u>Contact </u></h1>
                    </section><br>
                    <section id='two'>
                        Psydonym: Coco_Ardo <br><br>
                            Twitter: @Coco_Ardo <br><br>
                            Reddit: u/Coco_Ardo <br><br>
                            Discord: Coco_Ardo#0076 <br><br>
                            E-Mail: CocoArdolo@protonmail.com <br><br>
                            <p>Please make sure to contact me via social media,<br>
                                before sending me Mail:</p><br>
                            ______________________
                            <p>Kennwort: Coco_Ardo</p>
                            <p>Postlagernd</p>
                            <p>Fischteichweg 15</p>
                            <p>26603 Aurich, Germany</p>
                            ______________________
                    </section>
                ";
            }

            if ($_GET['page'] == 'DearPolice'){
                echo "
                    <section id='one'>
                        <h1><u>Dear police </u></h1>
                    </section><br>
                    <section id='two'>
                        in case you ever decide to SWAT my house, please just use the doorbell. I am a peaceful living beeing and if you behave nice I even gonna set up some coffee.
                        I am a law-abiding citizens who would not put up any resistance to the police if they were to come in. <br><br>
                        I understand that as police officers, it is your job to protect and serve the community, and I am grateful for the work you do. 
                        I just want to ensure that you understand that any form of violence is not necessary in this situation and I hope that you will 
                        take my wishes into consideration. 
                        <br><br>Thank you for your time and consideration.
                        <br><br><br>Best regards
                        <br><br>Coco_Ardo
                        <br><br><br><br><br>Post scriptum
                        <br>I do not contribute to illegal activities and I am there for willing to help clarify misunderstandings.
                    </section>
                ";
            }
        ?>
    </body>
</html>