"use client";
import { EventFormData } from "@/types";
import { inputStyles, tables } from "@/utils/consts";
import { createClient } from "@/utils/supabase/client";
import { FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

export default function FormNewEvent() {
  const labelStyles = "text-sm font-medium";
  const supabase = createClient();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const formData = new FormData(e.currentTarget);

      const data: EventFormData = {
        title: formData.get("name") as string,
        date: formData.get("date") as string,
        starttime: formData.get("starttime") as string,
        endtime: formData.get("endtime") as string,
        location: formData.get("location") as string,
        capacity: Number(formData.get("capacity")),
        description: formData.get("description") as string,
      };

      console.log("Form data:", data);
      const { data: insertedData, error } = await supabase
        .from(tables.events)
        .insert([data])
        .select();

      if (!error === null) return toast.error(error?.message);
      else toast.success("Event created successfully!");

      console.log("Inserted data:", insertedData);
      console.log("Error:", error);
    } catch (error) {
      console.log("Error:", error);
      toast.error("Error creating event");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center w-full gap-2 p-6 my-4 border rounded-lg border-zinc-200 focus-within:border-zinc-500"
    >
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <div className="flex flex-col w-full gap-2 sm:flex-row">
        <div className="w-full">
          <label htmlFor="name" className={labelStyles}>
            Event Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Weeding..."
            className={inputStyles}
            required
          />
        </div>
        <div className="w-full">
          <label htmlFor="date" className={labelStyles}>
            Event Date
          </label>
          <input
            type="date"
            name="date"
            placeholder="June 17, 2025"
            className={inputStyles}
            required
          />
        </div>
      </div>

      <div className="flex flex-col w-full gap-2 sm:flex-row">
        <div className="w-full">
          <label htmlFor="starttime" className={labelStyles}>
            Start Time
          </label>
          <input type="time" name="starttime" className={inputStyles} required/>
        </div>
        <div className="w-full">
          <label htmlFor="endtime" className={labelStyles}>
            End Time
          </label>
          <input type="time" name="endtime" className={inputStyles} required/>
        </div>
      </div>

      <div className="w-full">
        <label htmlFor="location" className={labelStyles}>
          Location
        </label>
        <input
          type="text"
          placeholder="Medellin, Colombia"
          name="location"
          className={inputStyles}
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="capacity" className={labelStyles}>
          Capacity
        </label>
        <input
          type="number"
          placeholder="120"
          name="capacity"
          className={inputStyles}
          min={0}
          max={45000}
          required
        />
      </div>
      <div className="w-full">
        <label htmlFor="description" className={labelStyles}>
          Description
        </label>
        <textarea
          placeholder="Weeding the garden and the lawn..."
          name="description"
          className={inputStyles}
          rows={5}
        />
      </div>

      <div className="flex items-center justify-end w-full gap-2">
        <button className="p-2 my-2 text-sm text-white rounded-lg cursor-pointer hover:bg-zinc-800 bg-zinc-900">
          {isLoading ? <span className="flex items-center gap-2">Create <Spinner /></span> : "Create"}
        </button>
      </div>
      
    </form>
  );
}
