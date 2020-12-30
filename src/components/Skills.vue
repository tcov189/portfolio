<template>
  <div id="skills">
    <h2 class="text-3xl uppercase font-bold mt-2 mb-4">Skills</h2>
    <h3 class="mb-4 text-lg font-semibold">Programming Languages</h3>
    <div class="flex flex-wrap md:flex-no-wrap md:space-x-10">
        <div class="language-card">
            <FontAwesomeIcon icon="laravel" type="fab" class="w-12 h-full text-red-700" />
            <p>Laravel</p>
        </div>
        <div class="language-card">
            <FontAwesomeIcon icon="php" type="fab" class="w-12 h-full text-purple-600" />
            <p>PHP</p>
        </div>
        <div class="language-card">
            <FontAwesomeIcon icon="vuejs" type="fab" class="w-12 h-full text-green-600" />
            <p>Vue&nbsp;JS</p>
        </div>
        <div class="language-card">
            <FontAwesomeIcon icon="js" type="fab" class="w-12 h-full text-yellow-600" />
            <p>JavaScript</p>
        </div>
        <div class="language-card">
            <FontAwesomeIcon icon="html5" type="fab" class="w-12 h-full text-orange-600" />
            <p>HTML&nbsp;5</p>
        </div>
        <div class="language-card">
            <FontAwesomeIcon icon="css3" type="fab" class="w-12 h-full text-blue-600" />
            <p>CSS</p>
        </div>
    </div>
    <h3 class="mt-4 mb-3 text-lg font-semibold">Workflow and Tooling</h3>
    <div class="flex flex-col">
        <div class="flex ml-3">
            <FontAwesomeIcon icon="angle-right" class="w-3 text-gray-600" />
            <p class="ml-2">
                Certified Scrum Master
                <DefaultLink class="hidden sm:inline-block" destination="https://www.scrumalliance.org/community/profile/tcovington" text="- Credential ID 000526053" />
            </p>
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

<style lang="postcss" scoped>
.language-card {
    @apply flex flex-col justify-between items-center w-2/6 mb-4;
}
</style>
