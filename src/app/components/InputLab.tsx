import { Input } from "@/components/ui/input";
import { useStore } from "@/store/lab";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export default function InputLab({ value, disabled, id, type }: any) {
  const labs = useStore((state) => state.labs);
  const updateLab = useStore((state) => state.updateLab);
  const labSchema = z.object({
    value: z.coerce.number().nonnegative({
      message: "Número positivo obrigatório",
    }),
  });
  type formType = z.infer<typeof labSchema>;
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formType>({
    resolver: zodResolver(labSchema),
    defaultValues: {
      value: value,
    },
  });
  const onSubmit = (value: formType) => {
    if (type === "functional") {
      const newLabs = labs.map((lab, idx) => {
        if (lab.id === id) {
          lab.functional = Number(value.value);
          return lab;
        }
        return lab;
      });

      console.log(newLabs);

      updateLab(newLabs);
    } else {
      const newLabs = labs.map((lab, idx) => {
        if (lab.id === id) {
          lab.nonFunctional = Number(value.value);
          return lab;
        }
        return lab;
      });

      console.log(newLabs);

      updateLab(newLabs);
    }
  };

  return (
    <form onChange={handleSubmit(onSubmit)}>
      <Input
        // onChange={(value) => updatedColumn(value, id, type)}
        disabled={disabled}
        {...(register("value"))}
        min={0}
        type="number"
      />
      {errors && (
        <span className="text-destructive text-xs">
          {errors.value?.message}
        </span>
      )}
    </form>
  );
}
