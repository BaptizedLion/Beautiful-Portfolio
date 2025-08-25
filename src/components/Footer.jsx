import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-5 px-4 bg-card relative border-t border-border mt-5 pt-1 flex flex-wrap justify-between items-center">
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} Built by Michael Mapanao, All rights
        reserved.
      </p>
      <a href='#hero'>
        <ArrowUp  size={20}/>
      </a>
    </footer>
  );
};
