import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { FlowerCategory, FlowerType, IFlower } from "@/Types/Flower.type";
import { UpdateFlowerSchema } from "../utils/FormValidation";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { flowerFilterColors } from "@/modules/shop/FlowerConstant";
import Header from "@/components/Header";
import { useUpdateFlower } from "../hooks/useUpdateFlower";
import { DialogTitle } from "@radix-ui/react-dialog";

export default function UpdateFlowerForm({ flower }: { flower: IFlower }) {
  const { mutate, isPending } = useUpdateFlower();

  const form = useForm<z.infer<typeof UpdateFlowerSchema>>({
    resolver: zodResolver(UpdateFlowerSchema),
    defaultValues: {
      name: flower.name,
      price: flower.price,
      description: flower.description,
      color: flower.color,
      category: flower.category,
      FlowerType: flower.FlowerType,
      stock: flower.stock,
      discount: flower.discount ?? 0,
      isAvailable: flower.isAvailable ?? true,
    },
  });

  const onSubmit = (values: z.infer<typeof UpdateFlowerSchema>) => {
    const payload = {
      ...values,
      discount: values.discount ?? 0, // Ensure discount is always a number
    };
    mutate({ id: flower.id, payload });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="mb-4">
          Update
        </Button>
      </DialogTrigger>

      <DialogContent className=" max-w-4xl max-h-10/12 overflow-y-auto">
        <DialogTitle>
          <Header title="Update Flower" />
        </DialogTitle>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Flower name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Price</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseFloat(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="isAvailable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Availability</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={(val) => field.onChange(val === "true")}
                        defaultValue={String(field.value)}>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select availability" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="true">Available</SelectItem>
                          <SelectItem value="false">Not Available</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Color</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="Select color" />
                        </SelectTrigger>
                        <SelectContent className="w-full ">
                          {flowerFilterColors.map((color, i) => (
                            <SelectItem
                              key={i}
                              value={
                                typeof color === "string" ? color : color.name
                              }>
                              {typeof color === "string" ? color : color.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Column 2 */}
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent className="w-full ">
                          {Object.values(FlowerCategory).map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat.replace(/_/g, " ")}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="FlowerType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Flower Type</FormLabel>
                    <FormControl>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <SelectTrigger className="w-full ">
                          <SelectValue placeholder="Select flower type" />
                        </SelectTrigger>
                        <SelectContent className="w-full ">
                          {Object.values(FlowerType).map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="stock"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Stock</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) =>
                          field.onChange(parseInt(e.target.value, 10))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Discount (%)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        {...field}
                        onChange={(e) => {
                          const val = e.target.value;
                          field.onChange(
                            val === "" ? undefined : parseFloat(val)
                          );
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Description */}
            <div className="col-span-2">
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter flower description..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit */}
            <div className="col-span-2">
              <Button
                type="submit"
                variant={"secondary"}
                disabled={isPending}
                className="w-full">
                Update Flower
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
