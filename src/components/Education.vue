<template>
  <div class="h-screen overflow-y-auto" id="education">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-8">Education</h2>
    <div class="space-y-12 mb-4">
      <div v-for="(item, index) in items" :key="`exp_${index}`">
        <InfoRow :item="item"> </InfoRow>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        {
          title: "DeVry University",
          subtitle: "Bachelor's Degree, Multimedia Design and Development",
          time: "2011 - 2014",
          description: [
            "Graduated Cum Laude with a Bachelor's in Multimedia Design and Development with a Specialization in Web Development.",
            "Courses include: Web Design and Development, Programming for Web, Visual Design, Web Scripting",
            "Made Dean's List every semester while attending.",
            "GPA: 3.6",
          ],
        },
        {
          title: "University of Iowa",
          subtitle: "Medical Radiologic Technology/Science - Radiation Therapist",
          time: "2008 - 2011",
          description: [
            "Completed General Education classes as well as Health Field Related classes",
            "Courses include: Intro to Chemistry, American Government, Medical Terminology, Mathematics for Biological Sciences, Anatomy and Physiology",
            "Maintained 2.8 GPA",
            "Left to pursue a different field of study at DeVry University",
            "Student Volunteer at The University of Iowa Hospitals and Clinics",
            "Student Worker at HillCrest Marketplace",
          ],
        },
        {
          title: "Prairie High School",
          subtitle: "HS Diploma",
          time: "2005 - 2008",
          description: [
            "Organized Sports: Wrestling, Football and Baseball",
            "Hawk's Nest: High School news program",
          ],
        },
      ],
    };
  },
};
</script>
