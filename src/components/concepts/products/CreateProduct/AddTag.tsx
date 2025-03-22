import AddCircleIcon from '@mui/icons-material/AddCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import GtButton, { GtButtonType } from '../../../shared/GtButton/GtButton';
import { useState } from 'react';

export default function AddTag() {
  const [isAddTagOpen, setIsAddTagOpen] = useState(false);
  const [selectedTag, setSelectedTag] = useState<GtTag[]>([]);

  const handleSelectTag = (tag: GtTag) => {
    const isTagIncluded = selectedTag.some((t) => t.id === tag.id);
    if (isTagIncluded) {
      setSelectedTag(selectedTag.filter((t) => t.id !== tag.id));
    } else {
      setSelectedTag([...selectedTag, tag]);
    }
  };

  const tags: GtTag[] = [
    {
      id: 1,
      name: 'ebook',
    },
    {
      id: 2,
      name: 'audio book',
    },
    {
      id: 3,
      name: 'epub',
    },
    {
      id: 4,
      name: 'book',
    },
    {
      id: 5,
      name: 'course',
    },
    {
      id: 6,
      name: 'music',
    },
  ];
  return (
    <div className="p-2 flex flex-col">
      {isAddTagOpen && (
        <div className="flex items-center mb-2">
          <input
            type="text"
            className="h-9 px-3 py-1 border border-gray-500 
                rounded-md text-sm w-[calc(100%_-_4rem)] mr-2"
          />
          <GtButton
            label="Add"
            variant={GtButtonType.SECONDARY}
            onClick={() => {}}
            fontSize="xs"
          />
          <CancelIcon
            className="text-pink-600 cursor-pointer ml-2"
            onClick={() => setIsAddTagOpen(false)}
          />
        </div>
      )}
      <div className="mb-2">
        <span className="text-sm text-gray-600">Select tags</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {tags.map((tag) => (
          <TagChip
            key={tag.id}
            tag={tag}
            onClick={() => handleSelectTag(tag)}
            isSelected={selectedTag.some((t) => t.id === tag.id)}
          />
        ))}
      </div>
      {!isAddTagOpen && (
        <div className="flex mt-2">
          <GtButton
            label="New Tag"
            variant={GtButtonType.PRIMARY}
            onClick={() => setIsAddTagOpen(true)}
            fontSize="sm"
            startIcon={<AddCircleIcon />}
          />
        </div>
      )}
    </div>
  );
}

interface TagChipProps {
  tag: GtTag;
  onClick: () => void;
  isSelected: boolean;
}
function TagChip({ tag, onClick, isSelected }: TagChipProps) {
  return (
    <div
      className={`${
        isSelected
          ? 'bg-sky-600 text-white'
          : 'text-sky-600 border-2 border-sky-200'
      } text-xs rounded-full
        text-center cursor-pointer py-1 px-1 transition duration-300 ease-in-out`}
      onClick={onClick}
      title={tag.name}
    >
      <span>{tag.name}</span>
    </div>
  );
}

interface GtTag {
  id: number;
  name: string;
}
