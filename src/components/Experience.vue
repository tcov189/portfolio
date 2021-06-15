<template>
  <div class="h-screen max-w-4xl" id="experience">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-8">Experience</h2>
    <div class="space-y-12 mb-4">
       <div v-for="(job, index) in jobs" :key="`exp_${index}`">
        <InfoRow :item="job"> </InfoRow>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      jobs: [
        {
          title: "Software Development Engineer II",
          subtitle: "Corporate Travel Management US",
          time: "April 2021 - Present",
          description: [
            "Part of a team that engineered web platforms/services that facilitated travel reward redemption and management for multiple clients.",
            "Developed and maintained PHP/Laravel APIs that provided SSO integration with clients via SAML and Auth2.0.",
            "Worked with React front end applications.",
          ],
        },
        {
          title: "Software Developer",
          subtitle: "Hyphen Financial",
          time: "September 2020 - April 2021",
          description: [
            "Worked with a remote team to facilitate web based loan application software.",
            "Developed Vue JS front end applications to suit both customer facing and internal applications.",
            "Engineered PHP (Laravel) APIs to provide data to front end apps.",
            "Utilized MySQL for application data architecture.",
            "Practiced Test Driven Development to produce quality and error resistant code.",
          ],
        },
        {
          title: "Web Developer",
          subtitle: "VGM Forbin",
          time: "July 2017 - September 2020",
          description: [
            "Created custom web applications for a wide variety of projects using mostly PHP for server side operations and MySql for database administration.",
            "Developed and maintained custom CMS platform using Laravel and Vue.",
            "Spearheaded effort to utilize Git Flow as our source management strategy..",
            "Developed and implemented SOC 2 compliant automated deployment mechanism.",
          ],
        },
        {
          title: "Software Engineer",
          subtitle: "FabPro",
          time: "July 2018 - September 2018",
          description: [
            "Developed Express JS based API for a React front end.",
            "Worked on legacy PHP application.",
          ],
        },
        {
          title: "User Interface Developer",
          subtitle: "TaxAct",
          time: "January 2015 - May 2017",
          description: [
            "Design and develop web pages using front-end languages like HTML5, CSS3 and JavaScript/jQuery along with back end technologies including C# and SQL in a MVC.net architecture.",
            "Analyze problems relating to user experience and develop solutions to increase usability.",
            "Maintain code and fix development bugs as it relates to the web sites, online applications and desktop applications.",
          ],
        },
        {
          title: "Web Developer",
          subtitle: "August Home Publishing Company",
          time: "June 2014 - January 2015",
          description: [
            "Developing projects utilizing languages such as HTML5, CSS3 and jQuery/JavaScript along with back end technologies including PHP and SQL.",
            "Working with team to update and maintain several sites including working with Wordpress and Yahoo Small Business sites.",
            "Design and development of product and promotion pages.",
            "Maintaining proper file management including consistent nomenclature and hierarchy.",
            "Create and optimize images for proper balance between file size and image quality.",
          ],
        },
      ],
    };
  },
};
</script>
