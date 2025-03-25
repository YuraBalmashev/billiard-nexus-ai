
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface LanguageSwitcherProps {
  isMobile?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isMobile = false }) => {
  const { language, setLanguage } = useLanguage();
  const { toast } = useToast();
  
  const toggleLanguage = () => {
    const newLanguage = language === 'EN' ? 'RU' : 'EN';
    setLanguage(newLanguage);
    
    toast({
      title: 'Language Changed',
      description: `Language switched to ${newLanguage === 'EN' ? 'English' : 'Russian'}`,
      duration: 2000,
    });
  };

  if (isMobile) {
    return (
      <Button 
        variant="ghost" 
        className="flex items-center justify-start px-4 py-2 w-full rounded-md transition-colors hover:bg-billman-dark"
        onClick={toggleLanguage}
      >
        <Globe size={20} className="mr-2" />
        <span>{language === 'EN' ? 'RUS' : 'ENG'}</span>
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-1 h-8 px-3 border border-billman-green/30 text-billman-white bg-transparent",
        "hover:bg-billman-green/10 hover:text-billman-green"
      )}
    >
      <Globe size={14} />
      <span className="font-medium">{language === 'EN' ? 'RUS' : 'ENG'}</span>
    </Button>
  );
};

export default LanguageSwitcher;
