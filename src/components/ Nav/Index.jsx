import React from "react";

export default function Index({className, Links}) {
  return (
    <nav className={className}>
        {
            Links?.map((link, index) => (    
                <a key={index} href={link.href}>{link.text}</a>
            ))
        }
    </nav>
  );
}
