"use client"

import { FreeConsultationSchema } from "@/schemas/FreeConsultation"
import { City, Property } from "@/utils/constants"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import CustomButton from "./Button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "./ui/dialog"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { cn } from "@/lib/utils"
import { Check, ChevronsUpDown } from "lucide-react"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "./ui/command"
import { Checkbox } from "@/components/ui/checkbox"
import { addFreeConsultation } from "@/actions/FreeConsultation.action"
import Loader from "./Loader"

export default function Quote({ id, className }: { id: string; className?: string }) {
    const form = useForm<z.infer<typeof FreeConsultationSchema>>({
        resolver: zodResolver(FreeConsultationSchema),
        defaultValues: {
            designId: Number(id),
            city: "BOKARO",
            property: "ONE_BHK",
            whatsappUpdates: false,
            name: "",
            phoneNumber: "",
        },
    })

    const submit = async (data: z.infer<typeof FreeConsultationSchema>) => {
        await addFreeConsultation(data)
    }

    return (
        <Dialog>
            <DialogTrigger asChild className={className}>
                <CustomButton className="mt-4 hover:bg-orange-200 hover:border-transparent" onClick={() => console.log("hii")}>
                    Get Quote
                </CustomButton>
            </DialogTrigger>

            <DialogContent>
                {!form.formState.isSubmitted ? (
                    <>
                        <DialogHeader>
                            <DialogTitle className="text-orange-500">
                                Get Your Free Consultation Now
                            </DialogTitle>
                            <DialogDescription>
                                Fill the details below to book for the free
                                consultation. After filling the details just
                                wait for our executive to call you!
                            </DialogDescription>
                        </DialogHeader>

                        <Form {...form}>
                            <form
                                onSubmit={form.handleSubmit(submit)}
                                className="space-y-4"
                            >
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-orange-500">Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="For Ex. Rohit Verma"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="phoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-orange-500">Phone Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="For Ex. 9234697581"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="property"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-orange-500">Property</FormLabel>
                                            <FormControl>
                                                <RadioGroup
                                                    onValueChange={
                                                        field.onChange
                                                    }
                                                    defaultValue={field.value}
                                                    className="flex space-x-1"
                                                >
                                                    {Property.map(
                                                        (property) => (
                                                            <FormItem
                                                                key={
                                                                    property.value
                                                                }
                                                                className="flex items-center space-x-3 space-y-0"
                                                            >
                                                                <FormControl>
                                                                    <RadioGroupItem
                                                                        value={
                                                                            property.value
                                                                        }
                                                                        className="checked:text-orange-500"
                                                                    />
                                                                </FormControl>
                                                                <FormLabel className="font-normal">
                                                                    {
                                                                        property.label
                                                                    }
                                                                </FormLabel>
                                                            </FormItem>
                                                        )
                                                    )}
                                                </RadioGroup>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="city"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-col">
                                            <FormLabel className="text-orange-500">City</FormLabel>
                                            <Popover>
                                                <PopoverTrigger asChild>
                                                    <FormControl>
                                                        <Button
                                                            variant="outline"
                                                            role="combobox"
                                                            className={cn(
                                                                "w-[200px] justify-between",
                                                                !field.value &&
                                                                    "text-muted-foreground"
                                                            )}
                                                        >
                                                            {field.value
                                                                ? City.find(
                                                                      (city) =>
                                                                          city ===
                                                                          field.value
                                                                  )
                                                                : "Select City"}
                                                            <ChevronsUpDown className="opacity-50" />
                                                        </Button>
                                                    </FormControl>
                                                </PopoverTrigger>
                                                <PopoverContent className="w-[200px] p-0">
                                                    <Command>
                                                        <CommandInput
                                                            placeholder="Search framework..."
                                                            className="h-9"
                                                        />
                                                        <CommandList>
                                                            <CommandEmpty>
                                                                No framework
                                                                found.
                                                            </CommandEmpty>
                                                            <CommandGroup>
                                                                {City.map(
                                                                    (city) => (
                                                                        <CommandItem
                                                                            value={
                                                                                city
                                                                            }
                                                                            key={
                                                                                city
                                                                            }
                                                                            onSelect={() => {
                                                                                form.setValue(
                                                                                    "city",
                                                                                    city
                                                                                )
                                                                            }}
                                                                        >
                                                                            {
                                                                                city
                                                                            }
                                                                            <Check
                                                                                className={cn(
                                                                                    "ml-auto",
                                                                                    city ===
                                                                                        field.value
                                                                                        ? "opacity-100"
                                                                                        : "opacity-0"
                                                                                )}
                                                                            />
                                                                        </CommandItem>
                                                                    )
                                                                )}
                                                            </CommandGroup>
                                                        </CommandList>
                                                    </Command>
                                                </PopoverContent>
                                            </Popover>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="whatsappUpdates"
                                    render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md">
                                            <FormControl>
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={
                                                        field.onChange
                                                    }
                                                />
                                            </FormControl>
                                            <div className="space-y-1 leading-none">
                                                <FormLabel>
                                                    Get all the updates through
                                                    whatsapp
                                                </FormLabel>
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    disabled={form.formState.isSubmitting || !form.formState.isValid}
                                    className="w-full bg-orange-500 hover:bg-orange-700"
                                >
                                    {form.formState.isSubmitting ? (
                                        <Loader
                                            className="w-full h-full"
                                            fill="fill-orange-900"
                                        />
                                    ) : (
                                        <>Book Now</>
                                    )}
                                </Button>
                            </form>
                        </Form>
                    </>
                ) : (
                    <div className="flex flex-col items-start justify-start gap-2">
                        <DialogHeader>
                            <DialogTitle className="text-xl text-orange-500">
                                Consultation Book Successfully!
                            </DialogTitle>
                            <DialogDescription>
                                Now sit back and relax while our executive get
                                in touch with you!
                            </DialogDescription>
                        </DialogHeader>
                        <DialogTrigger asChild>
                            <CustomButton className="self-end">Close</CustomButton>
                        </DialogTrigger>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    )
}
