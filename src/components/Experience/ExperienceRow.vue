<template>
  <div v-for="(job, index) in jobs" :key="`job_${index}`">
    <div class="flex justify-between">
      <p class="uppercase font-bold text-lg">{{ job.title }}</p>
      <div class="text-orange-800">
        {{ job.time }}
      </div>
    </div>
    <p class="text-gray-700">{{ job.company }}</p>
    <ul class="space-y-2 mt-6">
      <li class="text-sm" v-for="(item, index) in job.description" :key="`job_desc_${index}`">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        {
          title: "Software Developer",
          company: "Hyphen Financial",
          time: "September 2020 - Present",
          description: [
            "Worked remotely with a team to modernize loan application software.",
            "Converted Code Igniter based application to Laravel.",
            "Developed an admin application utilizing Vue/Vuetify SPA with Laravel API powered back end.",
          ],
        },
        {
          title: "Web Developer",
          company: "VGM Forbin",
          time: "July 2017 - September 2020",
          description: [
            "Created custom web applications for a wide variety of projects using mostly PHP for server side operations and MySql for database administration.",
            "Developed custom web applications.",
            "Spearheaded effort to utilize Git Flow as our source management strategy..",
            "Developed and implemented SOC 2 compliant automated deployment mechanism.",
            "Developed and maintained custom CMS platform using Laravel.",
          ],
        },
        {
          title: "Software Engineer",
          company: "FabPro",
          time: "July 2018 - September 2018",
          description: [
            "Worked on legacy PHP application.",
            "Developed Express JS based API for a React front end.",
          ],
        },
        {
          title: "User Interface Developer",
          company: "TaxAct",
          time: "January 2015 - May 2017",
          description: [
            "Design and develop web pages using front-end languages like HTML5, CSS3 and JavaScript/jQuery along with back end technologies including C# and SQL in a MVC.net architecture.",
            "Analyze problems relating to user experience and develop solutions to increase usability.",
            "Maintain code and fix development bugs as it relates to the web sites, online applications and desktop applications.",
          ],
        },
        {
          title: "Web Developer",
          company: "August Home Publishing Company",
          time: "June 2014 - January 2015",
          description: [
            "Developing projects utilizing languages such as HTML5, CSS3 and jQuery/JavaScript along with back end technologies including PHP and SQL.",
            "Working with team to update and maintain several sites including working with Wordpress and Yahoo Small Business sites..",
            "Design and development of product and promotion pages.",
            "Maintaining proper file management including consistent nomenclature and hierarchy.",
            "Create and optimize images for proper balance between file size and image quality.",
          ],
        },
      ],
    };
  }
};
</script>

<style></style>
