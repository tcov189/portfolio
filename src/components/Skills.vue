<template>
  <div id="skills">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-4">Skills</h2>
    <h3 class="mb-4 text-lg font-semibold">Programming Languages</h3>
    <div class="flex space-x-12">
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="laravel" type="fab" class="w-12 text-red-700" />
            <p>Laravel</p>
        </div>
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="php" type="fab" class="w-12 text-purple-600" />
            <p>PHP</p>
        </div>
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="vuejs" type="fab" class="w-12 text-green-600" />
            <p>Vue JS</p>
        </div>
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="js" type="fab" class="w-12 text-yellow-600" />
            <p>JavaScript</p>
        </div>
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="html5" type="fab" class="w-12 text-orange-600" />
            <p>HTML 5</p>
        </div>
        <div class="flex flex-col justify-between items-center">
            <FontAwesomeIcon icon="css3" type="fab" class="w-12 text-blue-600" />
            <p>CSS</p>
        </div>
    </div>
    <h3 class="mt-4 mb-3 text-lg font-semibold">Workflow and Tooling</h3>
    <div class="flex flex-col">
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">Certified Scrum Master - <DefaultLink destination="https://www.scrumalliance.org/community/profile/tcovington" text="Credential ID 000526053" /></p>
        </div>
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">Composer</p>
        </div>
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">Node/NPM</p>
        </div>
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">Git</p>
        </div>
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">Unit Testing (PHPUnit and Jest)</p>
        </div>
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">VS Code</p>
        </div>
    </div>

  </div>
</template>

<script>
export default {};
</script>
