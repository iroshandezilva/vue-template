<template>
  <div>
    <Multiselect
      :can-clear="false"
      :searchable="true"
      :placeholder="placeholder"
      v-model="value"
      :options="options"
      :classes="{
        container: 'relative z-0 mx-auto w-full flex items-center justify-end box-border cursor-pointer border-2 border-gray-200 rounded-md bg-white text-sm leading-snug outline-none dark:border-gray-600 ',
        containerDisabled: 'cursor-default bg-gray-100',
        containerOpen: 'border-green-400',
        containerOpenTop: 'rounded-t-none',
        containerActive: 'ring ring-green-400 ring-opacity-30',
        singleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
        multipleLabel: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5',
        search: 'w-full absolute inset-0 outline-none appearance-none box-border border-0 text-sm font-sans bg-white rounded pl-3.5 dark:bg-gray-700 ',
        tags: 'flex-grow flex-shrink flex flex-wrap items-center mt-1 pl-2',
        tag: 'bg-green-400 text-white text-sm font-semibold py-0.5 pl-2 rounded mr-1 mb-1 flex items-center whitespace-nowrap',
        tagDisabled: 'pr-2 !bg-gray-400 text-white',
        tagRemove: 'flex items-center justify-center p-1 mx-0.5 rounded-sm hover:bg-black hover:bg-opacity-10 group',
        tagRemoveIcon: 'bg-multiselect-remove bg-center bg-no-repeat opacity-30 inline-block w-3 h-3 group-hover:opacity-60',
        tagsSearchWrapper: 'inline-block relative mx-1 mb-1 flex-grow flex-shrink h-full',
        tagsSearch: 'absolute inset-0 border-0 outline-none appearance-none p-0 text-sm font-sans box-border w-full',
        tagsSearchCopy: 'invisible whitespace-pre-wrap inline-block h-px',
        placeholder: 'flex items-center h-full absolute left-0 top-0 pointer-events-none bg-transparent leading-snug pl-3.5 text-gray-400',
        caret: 'bg-multiselect-caret bg-center bg-no-repeat w-3 h-3 py-px box-content mr-3.5 relative z-10 opacity-40 flex-shrink-0 flex-grow-0 transition-transform transform pointer-events-none ',
        caretOpen: 'rotate-180 pointer-events-auto',
        clear: 'pr-3.5 relative z-10 opacity-40 transition duration-300 flex-shrink-0 flex-grow-0 flex hover:opacity-80',
        clearIcon: 'bg-multiselect-remove bg-center bg-no-repeat w-2.5 h-4 py-px box-content inline-block',
        spinner: 'bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 mr-3.5 animate-spin flex-shrink-0 flex-grow-0',
        dropdown: 'absolute max-h-52 rounded-md py-2 -left-px -right-px -bottom-2 transform translate-y-full border border-gray-200 shadow-xl -mt-px overflow-y-auto z-50 bg-white flex flex-col ',
        dropdownTop: '-translate-y-full top-px bottom-auto flex-col-reverse rounded-t',
        dropdownHidden: 'hidden',
        options: 'flex flex-col p-0 m-0 list-none',
        optionsTop: 'flex-col-reverse',
        option: 'flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 px-3  border-l-2 border-transparent hover:border-green-400',
        optionPointed: 'text-gray-800 bg-gray-100',
        optionSelected: 'text-green-700 bg-green-50',
        optionDisabled: 'text-gray-300 cursor-not-allowed',
        optionSelectedPointed: 'text-green-700 bg-green-50 opacity-90',
        optionSelectedDisabled: 'text-green-100 bg-green-400 bg-opacity-50 cursor-not-allowed',
        noOptions: 'py-2 px-3 text-gray-600 bg-white',
        noResults: 'py-2 px-3 text-gray-600 bg-white',
        fakeInput: 'bg-transparent absolute left-0 right-0 -bottom-px w-full h-px border-0 p-0 appearance-none outline-none text-transparent',
        spacer: 'h-9 py-px box-content',
      }"
    />
  </div>
</template>

<script>
import Multiselect from '@vueform/multiselect'

export default {
  components: {
    Multiselect,
  },
  props:{
   options:{
     type:Array,
     required:true,
   },
   placeholder:{
     type:String,
     default:'',
   }
  },
  data() {
    return {
      value: null,
    }
  }
}
</script>

