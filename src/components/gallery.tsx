"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { categories, type Work } from "@/data/portfolio";

export function Gallery({ images }: { images: Work[] }) {
  const [category, setCategory] = useState("All work");
  const [subcategory, setSubcategory] = useState("All");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<Work | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const filtered = images.filter(
    (item) =>
      (category === "All work" || item.category === category) &&
      (subcategory === "All" || item.subcategory === subcategory),
  );
  const subcategories = [
    ...new Set(
      images
        .filter((item) => item.category === category)
        .map((item) => item.subcategory)
        .filter(Boolean),
    ),
  ];

  useEffect(() => {
    if (!selected) return;
    const modal = dialog.current;
    modal?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = overflow;
    };
  }, [selected]);

  function close() {
    dialog.current?.close();
    setSelected(null);
    opener.current?.focus({ preventScroll: true });
  }
  function step(direction: number) {
    if (!selected) return;
    const index = filtered.findIndex((item) => item.id === selected.id);
    setSelected(
      filtered[(index + direction + filtered.length) % filtered.length],
    );
  }

  return (
    <section
      className="archive paper-grid"
      id="archive"
      aria-labelledby="archive-title"
    >
      <div className="archive-heading">
        <div>
          <span className="eyebrow">THE REST OF THE STORY</span>
          <h2 id="archive-title">
            The work <em>archive.</em>
          </h2>
        </div>
        <p>
          Different formats.
          <br />
          The same love for design.
        </p>
      </div>
      <div className="category-filters" aria-label="Work categories">
        {["All work", ...categories].map((name) => (
          <button
            key={name}
            type="button"
            aria-pressed={category === name}
            onClick={() => {
              setCategory(name);
              setSubcategory("All");
              setExpanded(false);
            }}
          >
            {name}
            <span>
              {name === "All work"
                ? images.length
                : images.filter((item) => item.category === name).length}
            </span>
          </button>
        ))}
      </div>
      {subcategories.length > 0 && (
        <div
          className="subcategory-filters"
          aria-label={`${category} subcategories`}
        >
          {["All", ...subcategories].map((name) => (
            <button
              type="button"
              key={name}
              aria-pressed={subcategory === name}
              onClick={() => {
                setSubcategory(name);
                setExpanded(false);
              }}
            >
              {name}
            </button>
          ))}
        </div>
      )}
      <p className="archive-count" aria-live="polite">
        {filtered.length} pieces / {category}
        {subcategory !== "All" ? ` / ${subcategory}` : ""}
      </p>
      <div className="work-grid">
        {filtered.map((item, index) => (
          <button
            type="button"
            className="work-button"
            key={item.id}
            hidden={!expanded && index >= 12}
            aria-label={`View ${item.title}`}
            onClick={(event) => {
              opener.current = event.currentTarget;
              setSelected(item);
            }}
          >
            <span className="work-image">
              <Image
                src={item.thumbnail!}
                alt={item.title}
                width={item.width}
                height={item.height}
                sizes="(max-width: 600px) 45vw, (max-width: 1000px) 30vw, 23vw"
                unoptimized
              />
              <span className="image-open" aria-hidden="true">
                ↗
              </span>
            </span>
            <span className="work-caption">
              <span>{item.title}</span>
              <span>{item.subcategory || item.category}</span>
            </span>
          </button>
        ))}
      </div>
      {filtered.length > 12 && (
        <button
          className="archive-expand"
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded
            ? "Show fewer pieces ↑"
            : `Show all ${filtered.length} pieces ↓`}
        </button>
      )}
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label="Artwork viewer"
        onCancel={(event) => {
          event.preventDefault();
          close();
        }}
        onClose={() => {
          setSelected(null);
          opener.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
          }
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
          }
        }}
      >
        <div className="viewer-bar">
          <span>
            {selected?.category} / {selected?.subcategory || "Selected work"}
          </span>
          <button
            type="button"
            onClick={close}
            aria-label="Close artwork viewer"
            autoFocus
          >
            Close ✕
          </button>
        </div>
        {selected && (
          <>
            <div className="viewer-image">
              <Image
                src={selected.src}
                alt={selected.title}
                width={selected.width}
                height={selected.height}
                unoptimized
              />
            </div>
            <div className="viewer-bottom">
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous artwork"
              >
                ←
              </button>
              <p>
                {selected.title}
                <span>
                  {filtered.findIndex((item) => item.id === selected.id) + 1} /{" "}
                  {filtered.length}
                </span>
              </p>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next artwork"
              >
                →
              </button>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
