<script setup>
import { ref } from "vue";

import BaseIcon from "@/components/common/atoms/base-icon/BaseIcon.vue";
import BaseInput from "@/components/common/atoms/base-input/BaseInput.vue";
import BaseButton from "@/components/common/atoms/base-button/BaseButton.vue";
import BaseSwitch from "@/components/common/atoms/base-switch/BaseSwitch.vue";
import BaseDropdown from "@/components/common/atoms/base-dropdown/BaseDropdown.vue";
import BaseCheckbox from "@/components/common/atoms/base-checkbox/BaseCheckbox.vue";
import BaseCollapse from "@/components/common/atoms/base-collapse/BaseCollapse.vue";
import BaseRadioButtonGroup from "@/components/common/atoms/base-radio/BaseRadioButtonGroup.vue";
import BaseCardIcon from "@/components/common/molecules/base-cards/base-card-icon/BaseCardIcon.vue";
import BaseInputCurrency from "@/components/common/atoms/base-input-currency/BaseInputCurrency.vue";
import BaseCardService from "@/components/common/molecules/base-cards/base-card-service/BaseCardService.vue";
import BaseCardCategory from "@/components/common/molecules/base-cards/base-card-category/BaseCardCategory.vue";
import BaseCardColorful_4x5 from "@/components/common/molecules/base-cards/base-card-colorful-4x5/BaseCardColorful_4x5.vue";

import FileUploader from "@/components/file-uploader/FileUploader.vue";

import Code from "@/layouts/code/code.vue";

import Home from "@/assets/icons/ui-kit/Home.svg";
import HomeLight from "@/assets/icons/ui-kit/HomeLight.svg";
import InputMark from "@/assets/icons/ui-kit/InputMark.svg";
import BaseImage from "@/components/common/atoms/base-image/BaseImage.vue";

// ********************* Switch values *********************

const switch1 = ref(false);
const switch2 = ref(false);
const switch3 = ref(false);

const switch1Change = () => {
  console.log("switch1 value", switch1.value);
};

const switch3Change = () => {
  console.log("switch3 value", switch1.value);
};

// ******************** Checkbox values **********************

const checkbox1 = ref(false);
const checkbox2 = ref(false);

const checkbox1Change = () => {
  console.log("checkbox1 value", checkbox1.value);
};

// ******************* Radio Group values *********************

const baseRadioSelected = ref("");

const baseRadioGroupList = ref([
  {
    title: "Radio button",
    value: 1,
  },
  {
    title: "Radio button",
    value: 2,
  },
  {
    title: "Radio button",
    value: 3,
    disabled: true,
  },
]);

// ******************* Input values *********************

const input1 = ref("");
const input2 = ref("");
const input3 = ref("");
const input4 = ref("");

const input5 = ref(""); // base-component-currency
const input6 = ref(""); // base-component-currency

// ******************* Dropdown *********************

const selectDropdown = ref("");

const dropdownOptions = ref([
  {
    value: "Male",
    key: "male",
  },
  {
    value: "Female",
    key: "female",
  },
  {
    value: "Other",
    key: "other",
  },
]);

// ******************* Base Card Service (type square) *********************

const baseCardServiceSquareSelect = ref("");

const baseCardServiceSquareList = ref([
  {
    title: "Base card service",
    description: "",
    value: 1,
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
  {
    value: 2,
    title: "Base card service",
    description: "",
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
  {
    title: "Base card service",
    description: "",
    value: 3,
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
]);

// ***************** Base Card Service (type rectangle) ********************

const baseCardServiceRectangleSelect = ref("");

const baseCardServiceRectangleList = ref([
  {
    title: "Base card service",
    description: "",
    value: 1,
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
  {
    value: 2,
    title: "Base card service",
    description: "",
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
  {
    title: "Base card service",
    description: "",
    value: 3,
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
]);

// ******************* Base Card Image Icon *********************

const baseCardIconSelect = ref("");

const baseCardIconList = ref([
  {
    title: "“S” shaped butt",
    value: 1,
    image: "identity-images/butt-shape/butt-shape.png",
    icon: "identity-images/butt-shape/butt-shape-icon.svg",
  },
  {
    title: "“S” shaped butt",
    value: 2,
    image: "identity-images/butt-shape/butt-shape.png",
    icon: "identity-images/butt-shape/butt-shape-icon.svg",
  },
  {
    title: "“S” shaped butt",
    value: 3,
    image: "identity-images/butt-shape/butt-shape.png",
    icon: "identity-images/butt-shape/butt-shape-icon.svg",
  },
]);

// ***************** Base Card Indicator ********************

const baseCard4x5Select = ref("");

const baseCard4x5List = ref([
  {
    title: "Blonde",
    value: 1,
    image: "identity-images/hair-type/straight.png",
    color: "#FFBD05",
  },
  {
    title: "Strawberry Blonde",
    value: 2,
    image: "identity-images/hair-type/straight.png",
    color: "#F1801B",
  },
  {
    title: "Auburn",
    value: 3,
    image: "identity-images/hair-type/straight.png",
    color: "#7D2812",
  },
  {
    title: "Brown",
    value: 4,
    image: "identity-images/hair-type/straight.png",
    color: "#71584C",
  },
  {
    title: "Dark Brown",
    value: 5,
    image: "identity-images/hair-type/straight.png",
    color: "#41261F",
  },
  {
    title: "Black",
    value: 6,
    image: "identity-images/hair-type/straight.png",
    color: "#030708",
  },
  {
    title: "Salt and Pepper",
    value: 7,
    image: "identity-images/hair-type/straight.png",
    color: "#424242",
  },
  {
    title: "Grey",
    value: 8,
    image: "identity-images/hair-type/straight.png",
    color: "#9CA1A0",
  },
  {
    title: "Colorful",
    value: 9,
    image: "identity-images/hair-type/straight.png",
    color: "colorful",
  },
]);

// ***************** Base Card Category *********************

const baseCardCategorySelect = ref("");

const BaseCardCategoryList = ref([
  {
    title: "Social Play",
    description: "Ideal way to raise the temperature & spice things up.",
    value: 1,
    icon: "base-card-category/heart-outlined-colorful.svg",
    disabled: true,
  },
  {
    title: "Soft Play",
    description: "Relax body & mind, set off to discover pleasure.",
    value: 2,
    icon: "base-card-category/heart-colorful.svg",
  },
  {
    title: "Hard Play",
    description: "Increase tension with dirty dares, wild quickies.",
    value: 3,
    icon: "base-card-category/heart-heartbeat-colorful.svg",
  },
  {
    title: "Extreme Play",
    description: "Reveal your shameless desires, exceed your limits !",
    value: 4,
    icon: "base-card-category/heart-horns-colorful.svg",
    disabled: true,
  },
]);
</script>

<template>
  <div id="wrapper">
    <!-- ********************* Switch ********************* -->

    <base-collapse size="20" :title="'Switch'" :collapse="true">
      <section>
        <div class="box">
          <base-switch v-model="switch1" @change="switch1Change" />
          <p>
            Switch default <span class="demo-value">{{ switch1 }}</span>
          </p>
        </div>

        <div class="box">
          <base-switch v-model="switch2" :disabled="true" />
          <p>
            Switch disable <span class="demo-value">{{ switch2 }}</span>
          </p>
        </div>

        <div class="box">
          <base-switch
            v-model="switch3"
            variant="light"
            @change="switch3Change"
          />
          <p>
            Switch light variant <span class="demo-value">{{ switch3 }}</span>
          </p>
        </div>

        <hr style="margin-bottom: 1rem" />

        <Code>
          <pre>
&lt;base-switch v-model="switch1" @change="switch1Change" /&gt;

&lt;base-switch v-model="switch2" :disabled="true" /&gt;

&lt;base-switch v-model="switch3" variant="light" /&gt;
        </pre
          >
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Checkbox ********************* -->

    <base-collapse size="20" :title="'Checkbox'" :collapse="true">
      <section>
        <div class="box">
          <base-checkbox
            v-model="checkbox1"
            label="checked"
            @change="checkbox1Change"
          />
          <p>
            Checkbox default <span class="demo-value">{{ checkbox1 }}</span>
          </p>
        </div>

        <div class="box">
          <base-checkbox v-model="checkbox2" label="checked" :disabled="true" />
          <p>
            Checkbox disable <span class="demo-value">{{ checkbox2 }}</span>
          </p>
        </div>

        <Code>
          <pre>
&lt;base-checkbox 
  v-model="checkbox1" 
  label="checked"
  @change="checkbox1Change"
/&gt;

&lt;base-checkbox 
  v-model="checkbox2" 
  label="checked"
  :disabled="true"
/&gt;
        </pre
          >
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Radio ********************* -->

    <base-collapse size="20" :title="'Radio'" :collapse="true">
      <section>
        <div class="box">
          <base-radio-button-group
            v-model="baseRadioSelected"
            :options="baseRadioGroupList"
            @input="(e) => (baseRadioSelected = e.target.value)"
          />
          <p class="radio-value">{{ baseRadioSelected }}</p>
        </div>

        <Code>
          <pre>
const baseRadioSelected = ref("");

const baseRadioGroupList = ref([
  {
    title: "Radio button",
    value: 1,
  },
  {
    title: "Radio button",
    value: 2,
  },
  {
    title: "Radio button",
    value: 3,
    disabled: true,
  },
]);

&lt;base-radio-button-group 
  v-model="baseRadioSelected" 
  :options="baseRadioGroupList"
  @input="(e) => (baseRadioSelected = e.target.value)"
/&gt;

&lt;p&gt; &#123;&#123; baseRadioSelected &#125;&#125; &lt;/p&gt;
        </pre
          >
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Button ********************* -->

    <base-collapse size="20" :title="'Button'" :collapse="true">
      <section>
        <div class="docs">
          <h2 class="monts_reg_20">Buttons accept 6 parameters</h2>

          <table>
            <tr>
              <th>Variant</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>variant (type string)</td>
              <td>primary / primary-light / light / active</td>
            </tr>
            <tr>
              <td>disabled (type boolean)</td>
              <td>true / false (default false)</td>
            </tr>
            <tr>
              <td>alt (type string for icon)</td>
              <td>default "icon"</td>
            </tr>
            <tr>
              <td>icon (type string)</td>
              <td>default empty string</td>
            </tr>
            <tr>
              <td>icon-left (type boolean)</td>
              <td>default false</td>
            </tr>
            <tr>
              <td>icon-right (type boolean)</td>
              <td>default false</td>
            </tr>
          </table>
        </div>

        <div class="btn-group-section">
          <div class="btn-box">
            <div class="box">
              <base-button> Send </base-button>

              <p>Default button</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="Home" alt="Button with icon">
                Send
              </base-button>

              <p>Button with icon</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="Home"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="HomeLight" variant="primary">
                Send
              </base-button>

              <p>Button with icon variant primary</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="HomeLight" variant="primary"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="HomeLight" icon-left variant="primary">
                Send
              </base-button>

              <p>Button with icon left variant primary</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="HomeLight" icon-left variant="primary"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="HomeLight" icon-right variant="primary">
                Send
              </base-button>

              <p>Button with icon right variant primary</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="HomeLight" icon-right variant="primary"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button variant="light"> Send</base-button>

              <p>Button variant light</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button variant="light"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="Home" icon-left variant="light">
                Send
              </base-button>

              <p>Button variant light with icon left</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="Home" icon-left variant="light"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button variant="primary-light"> Send</base-button>

              <p>Button variant primary light</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button variant="primary-light"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="Home" variant="primary-light">
                Send
              </base-button>

              <p>Button with icon variant primary light</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="Home" variant="primary-light"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button :icon="Home" />

              <p>Button with only icon</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="Home"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button
                variant="primary-light"
                :icon="Home"
                :disabled="true"
              >
                Disabled
              </base-button>

              <p>Button with disabled</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button :icon="Home" variant="primary-light" :disabled="true"&gt; Send &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>

          <div class="btn-box">
            <div class="box">
              <base-button variant="active"> Active</base-button>

              <p>Active button</p>
            </div>

            <Code>
              <pre class="pre-btn">
&lt;base-button variant="active"&gt; Next &lt;/base-button&gt;        
        </pre
              >
            </Code>
          </div>
        </div>
      </section>
    </base-collapse>

    <!-- ********************* Input ********************* -->

    <!-- <h3 class="title">Input</h3> -->

    <base-collapse size="20" :title="'Input'" :collapse="true">
      <section>
        <div class="docs">
          <h2 class="monts_reg_20">Input accept 8 parameters</h2>

          <table>
            <tr>
              <th>Variant</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>label (type string)</td>
              <td>Default empty string</td>
            </tr>
            <tr>
              <td>Disabled (type boolean)</td>
              <td>true / false (default false)</td>
            </tr>
            <tr>
              <td>alt (type string for icon)</td>
              <td>default "icon"</td>
            </tr>
            <tr>
              <td>icon (type String, Number)</td>
              <td>default empty string</td>
            </tr>
            <tr>
              <td>modelValue (or v-model, type String, Number)</td>
              <td>default empty string</td>
            </tr>
            <tr>
              <td>max (Max row number, type String, Number)</td>
              <td>Default 30 characters</td>
            </tr>
            <tr>
              <td>Placeholder (type String)</td>
              <td>Default empty string</td>
            </tr>
            <tr>
              <td>Type (input type, default string)</td>
              <td>
                text / password / email / number / url / tel / search / color
              </td>
            </tr>
          </table>
        </div>

        <div class="box">
          <base-input
            v-model="input1"
            type="text"
            :icon="InputMark"
            placeholder="Placeholder"
            label="Label"
          />
          <p style="margin-top: 1.5rem">{{ input1 }}</p>
        </div>

        <Code>
          <pre>
&lt;base-input 
  type="text"
  v-model="input1"
  :icon="InputMark"
  placeholder="Placeholder"
  label="Label"
/&gt;

&lt;p&gt; &#123;&#123; input1 &#125;&#125; &lt;/p&gt;
        </pre
          >
        </Code>

        <hr style="margin: 2rem 0" />

        <div class="box">
          <base-input v-model="input2" type="text" placeholder="Placeholder" />
          <p>{{ input2 }}</p>
        </div>

        <Code>
          <pre>
&lt;base-input type="text" v-model="input2" placeholder="Placeholder" /&gt;

&lt;p&gt; &#123;&#123; input2 &#125;&#125; &lt;/p&gt;
        </pre
          >
        </Code>

        <hr style="margin: 2rem 0" />

        <div class="box">
          <base-input
            v-model="input3"
            type="text"
            :disabled="true"
            placeholder="Placeholder"
          />
          <p>Input with disabled</p>
        </div>

        <Code>
          <pre>
&lt;base-input type="text" :disabled="true" placeholder="Placeholder" /&gt;
        </pre
          >
        </Code>

        <hr style="margin: 2rem 0" />

        <div class="box">
          <base-input
            v-model="input4"
            type="text"
            max="3"
            placeholder="Placeholder"
          />
          <p>Input max length 3</p>
        </div>

        <Code>
          <pre>
&lt;base-input type="text" max="3" placeholder="Placeholder" /&gt;
        </pre
          >
        </Code>
      </section>
    </base-collapse>

    <base-collapse size="20" :title="'Input currency'" :collapse="true">
      <section>
        <div class="box">
          <base-input-currency
            v-model="input5"
            :disabled="true"
            placeholder="Enter rate (disable)"
          />
          <p>{{ input5 }}</p>
        </div>

        <Code>
          <pre>
&lt;base-input-currency v-model="input5" disabled="true" placeholder="Enter rate" /&gt;
</pre
          >
        </Code>

        <hr style="margin: 2rem 0" />

        <div class="box">
          <base-input-currency v-model="input6" placeholder="Enter rate" />
          <p>{{ input6 }}</p>
        </div>

        <Code>
          <pre>
&lt;base-input-currency v-model="input6" placeholder="Enter rate" /&gt;
</pre
          >
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Dropdown ********************* -->

    <base-collapse size="20" :title="'Dropdown'" :collapse="true">
      <section>
        <div class="box">
          <base-dropdown
            v-model="selectDropdown"
            :options="dropdownOptions"
            :placeholder="'Select Item'"
          />
          <p>{{ selectDropdown }}</p>
        </div>

        <Code>
          <pre>
const selectDropdown = ref("");

const dropdownOptions = ref([
  {
    value: "Male",
    key: "male",
  },
  {
    value: "Female",
    key: "female",
  },
  {
    value: "Other",
    key: "other",
  },
]);

&lt;base-dropdown v-model="selectDropdown" :options="dropdownOptions" :placeholder="'Select Item'" /&gt;
        </pre
          >
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Icon ********************* -->

    <base-collapse size="20" :title="'Icons'" :collapse="true">
      <section class="icons-pack">
        <div class="box">
          <div>
            <base-icon src="repeat/add-user.svg" />
            <small>add-user.svg</small>
          </div>
          <div>
            <base-icon src="repeat/arrow-down.svg" />
            <small>arrow-down.svg</small>
          </div>
          <div>
            <base-icon src="repeat/arrow-left.svg" />
            <small>arrow-left.svg</small>
          </div>
          <div>
            <base-icon src="repeat/arrow-up.svg" />
            <small>arrow-up.svg</small>
          </div>
          <div>
            <base-icon src="repeat/bag.svg" />
            <small>bag.svg</small>
          </div>
          <div>
            <base-icon src="repeat/blackboard.svg" />
            <small>blackboard.svg</small>
          </div>
          <div>
            <base-icon src="repeat/book.svg" />
            <small>book.svg</small>
          </div>
          <div>
            <base-icon src="repeat/arrow-right-dark.svg" />
            <small>arrow-right-dark.svg</small>
          </div>
          <div style="background: #4a4a4a">
            <base-icon src="repeat/arrow-right-light.svg" />
            <small style="color: #fafafa">arrow-right-light.svg</small>
          </div>
          <div>
            <base-icon src="repeat/calendar.svg" />
            <small>calendar.svg</small>
          </div>
          <div>
            <base-icon src="repeat/car.svg" />
            <small>car.svg</small>
          </div>
          <div>
            <base-icon src="repeat/category.svg" />
            <small>category.svg</small>
          </div>
          <div>
            <base-icon src="repeat/checkout.svg" />
            <small>checkout.svg</small>
          </div>
          <div>
            <base-icon src="repeat/circle.svg" />
            <small>circle.svg</small>
          </div>
          <div>
            <base-icon src="repeat/follow-rectangle-scale.svg" />
            <small>follow-rectangle-scale.svg</small>
          </div>
          <div>
            <base-icon src="repeat/follow.svg" />
            <small>follow.svg</small>
          </div>
          <div>
            <base-icon src="repeat/home.svg" />
            <small>home.svg</small>
          </div>
          <div>
            <base-icon src="repeat/infotip.svg" />
            <small>infotip.svg</small>
          </div>
          <div>
            <base-icon src="repeat/news-feed.svg" />
            <small>news-feed.svg</small>
          </div>
          <div>
            <base-icon src="repeat/refresh.svg" />
            <small>refresh.svg</small>
          </div>
          <div>
            <base-icon src="repeat/triangle-transform.svg" />
            <small>triangle-transform.svg</small>
          </div>
          <div>
            <base-icon src="repeat/unlocked.svg" />
            <small>unlocked.svg</small>
          </div>
          <div>
            <base-icon src="repeat/upload.svg" />
            <small>upload.svg</small>
          </div>
          <div>
            <base-icon src="repeat/withdraw.svg" />
            <small>withdraw.svg</small>
          </div>
          <div>
            <base-icon src="repeat/heart-outline.svg" />
            <small>heart-outline.svg</small>
          </div>
          <div>
            <base-icon src="repeat/heart-fill.svg" />
            <small>heart-fill.svg</small>
          </div>
          <div>
            <base-icon src="repeat/heart-heartbeat.svg" />
            <small>heart-heartbeat.svg</small>
          </div>
          <div>
            <base-icon src="repeat/heart-horns.svg" />
            <small>heart-horns.svg</small>
          </div>
          <div>
            <base-icon src="repeat/edit.svg" />
            <small>edit.svg</small>
          </div>
          <div>
            <base-icon src="repeat/profile.svg" />
            <small>profile.svg</small>
          </div>
          <div>
            <base-icon src="repeat/add-image.svg" />
            <small>add-image.svg</small>
          </div>
          <div>
            <base-icon src="repeat/delete.svg" />
            <small>delete.svg</small>
          </div>
          <div>
            <base-icon src="repeat/add-video.svg" />
            <small>add-video.svg</small>
          </div>
          <div>
            <base-icon src="repeat/invite.svg" />
            <small>invite.svg</small>
          </div>
          <div>
            <base-icon src="repeat/total-amount.svg" />
            <small>total-amount.svg</small>
          </div>
          <div>
            <base-icon src="repeat/each-service-price.svg" />
            <small>each-service-price.svg</small>
          </div>
          <div>
            <base-icon src="repeat/auction-bid.svg" />
            <small>auction-bid.svg</small>
          </div>
          <div>
            <base-icon src="repeat/lock.svg" />
            <small>lock.svg</small>
          </div>
          <div>
            <base-icon src="repeat/question-mark.svg" />
            <small>question-mark.svg</small>
          </div>
        </div>

        <Code>
          <pre>
&lt;base-icon src="repeat/question.svg" /&gt;
          </pre>
        </Code>
      </section>
    </base-collapse>

    <!-- ********************* Cards ********************* -->

    <base-collapse size="20" :title="'Cards'" :collapse="true">
      <section>
        <!-- base-card-service Square -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">
              Base card image group (type square)
              <span>{{ baseCardServiceSquareSelect }}</span>
            </h3>

            <div style="display: flex; justify-content: space-between">
              <base-card-service
                v-model="baseCardServiceSquareSelect"
                type="square"
                :options="baseCardServiceSquareList"
              />
            </div>
          </div>

          <Code>
            <pre>
const baseCardServiceSquareSelect = ref("");

const baseCardServiceSquareList = ref([
  {
    title: "Base card service",
    description: "",
    value: 1,
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
  {
    value: 2,
    title: "Base card service",
    description: "",
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
  {
    title: "Base card service",
    description: "",
    value: 3,
    image: "base-cards-images/base-card-service/base-card-service.png",
  },
]);

&lt;base-card-image
  v-model="baseCardServiceSquareSelect"
  :options="baseCardServiceSquareList"
  type="square"
/&gt;
        </pre
            >
          </Code>
        </div>

        <!-- base-card-service Rectangle -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">
              Base card image group (type rectangle)
              <span>{{ baseCardServiceRectangleSelect }}</span>
            </h3>

            <div style="display: flex; justify-content: space-between">
              <base-card-service
                v-model="baseCardServiceRectangleSelect"
                type="rectangle"
                :options="baseCardServiceRectangleList"
              />
            </div>
          </div>

          <Code>
            <pre>
const baseCardServiceRectangleSelect = ref("");

const baseCardServiceRectangleList = ref([
  {
    title: "Base card service",
    description: "",
    value: 1,
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
  {
    value: 2,
    title: "Base card service",
    description: "",
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
  {
    title: "Base card service",
    description: "",
    value: 3,
    image: "base-cards-images/base-card-service/base-card-service-gray.png",
  },
]);

&lt;base-card-image
  v-model="baseCardServiceRectangleSelect"
  :options="baseCardServiceRectangleList"
  type="rectangle"
/&gt;
        </pre
            >
          </Code>
        </div>

        <!-- base-card-icon -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">
              Base card icon group <span>{{ baseCardIconSelect }}</span>
            </h3>

            <div style="display: flex; justify-content: space-between">
              <base-card-icon
                v-model="baseCardIconSelect"
                :options="baseCardIconList"
              />
            </div>
          </div>

          <Code>
            <pre>
const baseCardIconSelect = ref("");

const baseCardIconList = ref([
  {
    title: "“S” shaped butt",
    value: 1,
    image: "base-card-image/base-card-image.png",
    icon: "repeat/blackboard.svg",
  },
  {
    title: "“S” shaped butt",
    value: 2,
    image: "base-card-image/base-card-image.png",
    icon: "repeat/blackboard.svg",
  },
  {
    title: "“S” shaped butt",
    value: 3,
    image: "base-card-image/base-card-image.png",
    icon: "repeat/blackboard.svg",
  },
]);

&lt;base-card-icon v-model="baseCardIconSelect" :options="baseCardIconList" /&gt;
        </pre
            >
          </Code>
        </div>

        <!-- file-image -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">Base image</h3>

            <div>
              <base-image
                width="100"
                height="100"
                src="file-uploader-images/image-uploader.svg"
              />
            </div>
          </div>

          <Code>
            <pre>
&lt;base-image width="100" height="100" src="file-uploader-images/image-uploader.svg" /&gt;
        </pre
            >
          </Code>
        </div>

        <!-- base-card-4x5 -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">
              Base card 4x5 <span>{{ baseCard4x5Select }}</span>
            </h3>

            <base-card-colorful_4x5
              v-model="baseCard4x5Select"
              :options="baseCard4x5List"
            />
          </div>

          <Code>
            <pre>
const baseCard4x5Select = ref("");

const baseCard4x5List = ref([
  {
    title: "Blonde",
    value: 1,
    image: "identity-images/hair-type/straight.png",
    color: "#FFBD05",
  },
  {
    title: "Strawberry Blonde",
    value: 2,
    image: "identity-images/hair-type/straight.png",
    color: "#F1801B",
  },
  {
    title: "Auburn",
    value: 3,
    image: "identity-images/hair-type/straight.png",
    color: "#7D2812",
  },
  {
    title: "Brown",
    value: 4,
    image: "identity-images/hair-type/straight.png",
    color: "#71584C",
  },
  {
    title: "Dark Brown",
    value: 5,
    image: "identity-images/hair-type/straight.png",
    color: "#41261F",
  },
  {
    title: "Black",
    value: 6,
    image: "identity-images/hair-type/straight.png",
    color: "#030708",
  },
  {
    title: "Salt and Pepper",
    value: 7,
    image: "identity-images/hair-type/straight.png",
    color: "#424242",
  },
  {
    title: "Grey",
    value: 8,
    image: "identity-images/hair-type/straight.png",
    color: "#9CA1A0",
  },
  {
    title: "Colorful",
    value: 9,
    image: "identity-images/hair-type/straight.png",
    color: "colorful",
  },
]);

&lt;base-card-indicator
  v-model="baseCard4x5Select"
  :options="baseCard4x5List"
/&gt;
        </pre
            >
          </Code>
        </div>

        <!-- base-card-category -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">
              Base card-category group <span>{{ baseCardCategorySelect }}</span>
            </h3>

            <div style="display: flex; justify-content: space-between">
              <base-card-category
                v-model="baseCardCategorySelect"
                :options="BaseCardCategoryList"
              />
            </div>
          </div>

          <Code>
            <pre>
const baseCardCategorySelect = ref("");

const BaseCardCategoryList = ref([
  {
    title: "Social Play",
    description: "Ideal way to raise the temperature & spice things up.",
    value: 1,
    icon: "base-card-category/heart-outlined-colorful.svg",
    disabled: true,
  },
  {
    title: "Soft Play",
    description: "Relax body & mind, set off to discover pleasure.",
    value: 2,
    icon: "base-card-category/heart-colorful.svg",
  },
  {
    title: "Hard Play",
    description: "Increase tension with dirty dares, wild quickies.",
    value: 3,
    icon: "base-card-category/heart-heartbeat-colorful.svg",
  },
  {
    title: "Extreme Play",
    description: "Reveal your shameless desires, exceed your limits !",
    value: 4,
    icon: "base-card-category/heart-horns-colorful.svg",
    disabled: true,
  },
]);

&lt;base-card-indicator
  v-model="baseCard4x5Select"
  :options="baseCard4x5List"
/&gt;
        </pre
            >
          </Code>
        </div>

        <!-- file-uploader -->

        <div class="box base-card">
          <div>
            <h3 class="base-card-title">File uploader</h3>

            <div>
              <!-- type = private or free -->
              <file-uploader type="free" />
            </div>
          </div>
        </div>
      </section>
    </base-collapse>
  </div>
</template>

<style lang="scss" scoped>
@import "./UiKit.scss";
</style>
