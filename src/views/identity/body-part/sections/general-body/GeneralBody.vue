<script>
import { useBodyPart } from "@/api/useBodyPart";

export default {
  setup() {
    const { data: resData } = useBodyPart();

    return {
      resData,
    };
  },
};
</script>
